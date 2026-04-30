import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calculator, ShieldCheck, Clock, ArrowRight } from "lucide-react";
import heroImg from "@/assets/images/hero.png";

export default function Home() {
  useEffect(() => {
    document.title = "Taxly | The tax app for UK drivers";
  }, []);

  return (
    <div className="w-full bg-background overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-start text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-primary text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Built for UK Uber, Deliveroo & Amazon Flex drivers
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
                Drive more.<br />Worry less about <span className="text-primary">HMRC.</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
                We're the friendly, independent tax helper that makes self-assessment painless. Find out what you owe in 2 minutes, keep more of your earnings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link href="/assistant">
                  <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(0,229,255,0.3)] border-0">
                    Start your tax check <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/drivers">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg border-border hover:bg-secondary/50 text-white">
                    See how it works
                  </Button>
                </Link>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                No credit card required. Start chatting instantly.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-primary/20 via-primary/5 to-transparent blur-2xl"></div>
              <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl bg-secondary/50 aspect-[4/3] sm:aspect-video">
                <img 
                  src={heroImg} 
                  alt="A confident driver at night" 
                  className="w-full h-full object-cover opacity-90"
                />
                {/* Overlay UI element to make it feel techy */}
                <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-md border border-white/10 rounded-xl p-4 flex items-center justify-between shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <Calculator className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">ESTIMATED TAX</p>
                      <p className="text-white font-bold text-lg">£2,450.00</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">DEADLINE</p>
                    <p className="text-white font-medium">31 Jan</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-secondary/30 border-y border-border/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why drivers choose Taxly</h2>
            <p className="text-muted-foreground text-lg">We speak your language, not accountant jargon. We know exactly what expenses you can claim.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-background border border-border p-8 rounded-2xl flex flex-col items-start transition-all hover:border-primary/30"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Answers in minutes</h3>
              <p className="text-muted-foreground leading-relaxed">
                Chat with our tax helper 24/7. Find out your estimated tax bill before HMRC even sends a letter. No waiting for office hours.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-background border border-border p-8 rounded-2xl flex flex-col items-start transition-all hover:border-primary/30"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                <Calculator className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Maximise your expenses</h3>
              <p className="text-muted-foreground leading-relaxed">
                Mileage? Phone bill? Car wash? We know exactly what gig workers can claim to legally reduce their tax bill to the minimum.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-background border border-border p-8 rounded-2xl flex flex-col items-start transition-all hover:border-primary/30"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Reviewed by humans</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our smart helper does the heavy lifting, then real UK accountants review your final filing. Speed of tech, safety of professionals.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to sort your taxes?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Stop stressing about the January deadline. Talk to our helper right now, for free, and get a clear picture of where you stand.
          </p>
          <Link href="/assistant">
            <Button size="lg" className="h-16 px-10 text-xl bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_30px_rgba(0,229,255,0.4)] border-0 rounded-full">
              Open the Tax Helper
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
