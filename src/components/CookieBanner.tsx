import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Cookie, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const KEY = "taxbuddy.cookies-accepted";

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(KEY)) setShow(true);
  }, []);

  if (!show) return null;

  const accept = () => {
    localStorage.setItem(KEY, "1");
    setShow(false);
  };

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-50 bg-card border border-border rounded-2xl shadow-2xl p-5">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
          <Cookie className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <p className="text-sm text-foreground leading-relaxed">
            We use a couple of essential cookies to remember your language and keep this site working. No tracking, no ads.{" "}
            <Link href="/privacy" className="text-primary underline">Read more</Link>.
          </p>
          <div className="mt-3 flex gap-2">
            <Button onClick={accept} size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Got it
            </Button>
          </div>
        </div>
        <button onClick={accept} className="text-muted-foreground hover:text-white" aria-label="Dismiss">
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
