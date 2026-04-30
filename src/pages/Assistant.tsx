import { useEffect, useState, useRef } from "react";
import { Send, Loader2, MessagesSquare, User, HelpCircle, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/lib/language";

type Message = {
  role: "user" | "assistant";
  content: string;
  escalated?: boolean;
};

export default function Assistant() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const lang = useLang();

  useEffect(() => {
    document.title = "Tax Helper | Taxly UK";
  }, []);

  useEffect(() => {
    // Auto scroll to bottom
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMsg: Message = { role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    // Best-effort save to user's chat history (silently ignored if not logged in)
    fetch(`${import.meta.env.BASE_URL}api/me/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ role: "user", content: text, language: lang }),
    }).catch(() => {});

    try {
      const response = await fetch(`${import.meta.env.BASE_URL}api/driver-chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          language: lang,
          history: messages.map(({ role, content }) => ({ role, content })),
          message: text,
        }),
      });

      if (!response.ok) throw new Error("Failed to fetch");

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.reply,
          escalated: data.escalated,
        },
      ]);
      fetch(`${import.meta.env.BASE_URL}api/me/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ role: "assistant", content: data.reply, language: lang }),
      }).catch(() => {});
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, I'm having trouble connecting right now. Please try again in a moment.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const starterQuestions = [
    "I drive Uber, made £30,000 — how much tax?",
    "Can I claim mileage?",
    "How do I register as self-employed?",
    "What's the deadline for Self-Assessment?",
  ];

  return (
    <div className="w-full bg-background pt-24 pb-8 h-[100dvh] flex flex-col">
      <div className="container mx-auto px-4 max-w-4xl flex-1 flex flex-col h-full">
        
        <div className="mb-6 text-center shrink-0">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Find out how much tax you owe in 2 minutes
          </h1>
          <p className="text-muted-foreground">
            Chat anonymously. No signup required to get an estimate.
          </p>
        </div>

        <div className="flex-1 bg-card border border-border rounded-2xl flex flex-col overflow-hidden shadow-xl mb-4 relative">
          
          <ScrollArea className="flex-1 p-4 md:p-6" ref={scrollRef}>
            <div className="flex flex-col gap-6 max-w-3xl mx-auto pb-4">
              
              {messages.length === 0 && (
                <div className="flex flex-col items-center justify-center text-center py-12 px-4 h-full text-muted-foreground">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 border border-primary/20">
                    <MessagesSquare className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Hello, welcome to Taxly</h3>
                  <p className="max-w-md mx-auto mb-8">
                    Ask anything about your gig-driver earnings, expenses or HMRC deadlines. We follow UK HMRC rules and a qualified accountant always reviews your final filing.
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-2">
                    {starterQuestions.map((q) => (
                      <button
                        key={q}
                        onClick={() => sendMessage(q)}
                        className="bg-secondary hover:bg-secondary/80 border border-border text-sm text-foreground py-2 px-4 rounded-full transition-colors flex items-center gap-2"
                      >
                        <HelpCircle className="w-3.5 h-3.5 text-primary" />
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <AnimatePresence initial={false}>
                {messages.map((msg, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex gap-4 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                      msg.role === "user" ? "bg-primary text-primary-foreground" : "bg-secondary border border-border text-white"
                    }`}>
                      {msg.role === "user" ? <User className="w-4 h-4" /> : <MessagesSquare className="w-4 h-4" />}
                    </div>
                    <div className={`flex flex-col ${msg.role === "user" ? "items-end" : "items-start"} max-w-[80%]`}>
                      <div className={`px-5 py-3 rounded-2xl ${
                        msg.role === "user" 
                          ? "bg-primary text-primary-foreground rounded-tr-sm" 
                          : "bg-secondary border border-border text-foreground rounded-tl-sm whitespace-pre-wrap"
                      }`}>
                        {msg.content}
                      </div>
                      
                      {msg.escalated && (
                        <div className="mt-2 flex items-center gap-1.5 text-xs text-amber-500 bg-amber-500/10 px-2 py-1 rounded-md border border-amber-500/20">
                          <ShieldAlert className="w-3.5 h-3.5" />
                          Passed to our human team
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {isLoading && (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  className="flex gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-secondary border border-border flex items-center justify-center shrink-0">
                    <MessagesSquare className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-secondary border border-border px-5 py-4 rounded-2xl rounded-tl-sm flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary/60 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-primary/60 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-2 h-2 bg-primary/60 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                </motion.div>
              )}
            </div>
          </ScrollArea>

          <div className="p-4 border-t border-border bg-card">
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage(input);
              }}
              className="flex gap-3 max-w-3xl mx-auto"
            >
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your tax question here..."
                disabled={isLoading}
                className="flex-1 bg-secondary/50 border-border h-12 rounded-xl px-4 focus-visible:ring-primary"
              />
              <Button 
                type="submit" 
                disabled={!input.trim() || isLoading}
                className="h-12 w-12 rounded-xl shrink-0 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
              </Button>
            </form>
            <p className="text-center text-xs text-muted-foreground mt-3">
              Estimates only. Final filing is always reviewed by our UK accountants.
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
}
