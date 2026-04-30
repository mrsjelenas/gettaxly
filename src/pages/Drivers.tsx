import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { AlertCircle, FileWarning, HelpCircle, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import driverHeroImg from "@/assets/images/driver-hero.png";

export default function Drivers() {
  useEffect(() => {
    document.title = "For Drivers | Taxly UK";
  }, []);

  return (
    <div className="w-full bg-background pt-24 pb-20">
      {/* Hero Section */}
      <section className="px-4 py-12 md:py-20 border-b border-border/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                The hardest part of driving shouldn't be the <span className="text-primary">paperwork.</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Between dodging traffic, finding parking, and dealing with support, you work hard enough. You shouldn't have to become an accountant too.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
               <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-primary/20 via-primary/5 to-transparent blur-2xl"></div>
              <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl aspect-[4/3]">
                <img 
                  src={driverHeroImg} 
                  alt="Delivery courier at night" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Pain Section */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Sound familiar?</h2>
            <p className="text-lg text-muted-foreground">The things nobody tells you when you sign up to drive.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border p-8 rounded-2xl"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-destructive/10 p-2 rounded-lg text-destructive">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">"I don't know how much to save"</h3>
                  <p className="text-muted-foreground">
                    You're making money, but you don't know how much is actually yours. Getting to January and realizing you owe thousands is terrifying.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card border border-border p-8 rounded-2xl"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-amber-500/10 p-2 rounded-lg text-amber-500">
                  <HelpCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">"What expenses can I actually claim?"</h3>
                  <p className="text-muted-foreground">
                    Mileage allowance vs actual costs? Can I claim my phone bill? Car washes? If you get it wrong, HMRC might fine you. If you miss things, you overpay tax.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card border border-border p-8 rounded-2xl md:col-span-2"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-destructive/10 p-2 rounded-lg text-destructive">
                  <FileWarning className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">HMRC letters cause instant panic</h3>
                  <p className="text-muted-foreground">
                    The brown envelope on the doormat. The confusing jargon online. The fear that you've done something wrong without even realizing it.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How Taxly fixes it</h2>
            <p className="text-lg text-muted-foreground">Built exactly for this problem.</p>
          </div>

          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30">
                <span className="text-primary font-bold text-2xl">1</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Chat to know where you stand</h3>
                <p className="text-lg text-muted-foreground">
                  Just tell our helper how much you made and rough expenses. Within 2 minutes, you'll get a highly accurate estimate of your tax bill. No forms, just a chat.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30">
                <span className="text-primary font-bold text-2xl">2</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">We find your missing expenses</h3>
                <p className="text-lg text-muted-foreground">
                  Our system specifically looks for expenses that drivers forget to claim. We'll ask you about specific things to make sure you're legally minimizing your tax.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30">
                <span className="text-primary font-bold text-2xl">3</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">We file it for you</h3>
                <p className="text-lg text-muted-foreground">
                  If you want, our human accountants will take your numbers, verify them, and file them directly with HMRC. You just review and approve.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-20 text-center bg-secondary/50 border border-border p-10 rounded-3xl">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to stop worrying?</h3>
            <Link href="/assistant">
              <Button size="lg" className="h-14 px-8 text-lg bg-primary text-primary-foreground hover:bg-primary/90 mt-4 shadow-lg shadow-primary/20">
                Calculate my tax now <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
