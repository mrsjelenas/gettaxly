import { useEffect, useState } from "react";
import { ShieldCheck, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function About() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "About Us | Taxly UK";
  }, []);

  return (
    <div className="w-full bg-background pt-24 pb-20">
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Built by drivers, for drivers.
            </h1>
            <p className="text-xl text-muted-foreground">
              We started Taxly because we were tired of seeing hard-working couriers get hit with unexpected HMRC bills and fines.
            </p>
          </div>

          <div className="bg-secondary/40 border border-primary/20 rounded-2xl p-8 md:p-12 mb-20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent"></div>
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30">
                <ShieldCheck className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">Our Promise</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We are NOT HMRC. We are an independent helper. Our only goal is to make sure you pay exactly what you legally owe, and not a penny more. Your data is secure, encrypted, and never shared without your permission.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Contact Us</h2>
              <p className="text-muted-foreground mb-8">
                Have a specific question? Need help with an HMRC letter? Drop us a message and our human team will get back to you within 24 hours.
              </p>
              <div className="flex items-center gap-3 text-muted-foreground mb-4">
                <Mail className="w-5 h-5 text-primary" />
                <span>hello@taxly.co.uk</span>
              </div>
            </div>

            <div>
              {submitted ? (
                <div className="bg-primary/10 border border-primary/30 rounded-xl p-8 text-center h-full flex flex-col items-center justify-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-4">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent</h3>
                  <p className="text-muted-foreground">
                    Thanks for reaching out! We'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-4 bg-card border border-border rounded-2xl p-6"
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">Name</label>
                    <Input id="name" required placeholder="John Doe" className="bg-secondary/50 border-border focus-visible:ring-primary" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">Email</label>
                    <Input id="email" type="email" required placeholder="john@example.com" className="bg-secondary/50 border-border focus-visible:ring-primary" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">Message</label>
                    <Textarea id="message" required placeholder="How can we help?" className="bg-secondary/50 border-border min-h-[120px] focus-visible:ring-primary" />
                  </div>
                  <Button type="submit" className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold mt-2">
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
