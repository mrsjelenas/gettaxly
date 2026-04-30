import { useEffect } from "react";
import { Link } from "wouter";
import { Check, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

export default function Pricing() {
  useEffect(() => {
    document.title = "Pricing | Taxly UK";
  }, []);

  return (
    <div className="w-full bg-background pt-24 pb-20">
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Simple, upfront pricing.
          </h1>
          <p className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            You already give up enough of your earnings to the platforms. Our fees are low, clear, and fully tax-deductible.
          </p>
          <p className="text-sm text-primary mb-4 max-w-2xl mx-auto font-medium">
            One-off payment per Self-Assessment year — no subscription, no auto-renewal.
          </p>
          <p className="text-xs text-muted-foreground mb-16 max-w-2xl mx-auto">
            By clicking "Get started" you confirm that you have read and agree to our{" "}
            <a href="/taxbuddy/terms" className="text-primary underline">Terms of Service</a> and{" "}
            <a href="/taxbuddy/privacy" className="text-primary underline">Privacy Policy</a>, and you
            expressly request that work begins immediately. Fees become non-refundable once work has started
            (see section 4 of our Terms).
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
            {/* Starter Tier */}
            <Card className="bg-card border-border relative flex flex-col h-full">
              <CardHeader>
                <CardTitle className="text-2xl">Starter</CardTitle>
                <div className="mt-4 mb-2">
                  <span className="text-4xl font-bold text-white">£99</span>
                  <span className="text-muted-foreground ml-2">one-off</span>
                </div>
                <CardDescription className="text-base h-12">
                  Self-Assessment review + tax estimate
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Instant tax estimate</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Expense check</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Email summary for your records</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/assistant" className="w-full">
                  <Button variant="outline" className="w-full h-12 text-md border-border hover:bg-secondary">
                    Get started
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Standard Tier */}
            <Card className="bg-card border-primary relative flex flex-col h-full shadow-[0_0_30px_rgba(0,229,255,0.15)] transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold tracking-wide uppercase">
                Most Popular
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Standard</CardTitle>
                <div className="mt-4 mb-2">
                  <span className="text-4xl font-bold text-white">£249</span>
                  <span className="text-muted-foreground ml-2">one-off</span>
                </div>
                <CardDescription className="text-base h-12">
                  Full Self-Assessment filing
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-white font-medium">Everything in Starter, plus:</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Full HMRC filing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">1-1 review with a UK accountant</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Expense optimisation</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/assistant" className="w-full">
                  <Button className="w-full h-12 text-md bg-primary text-primary-foreground hover:bg-primary/90 font-bold">
                    Get started
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Pro Tier */}
            <Card className="bg-card border-border relative flex flex-col h-full">
              <CardHeader>
                <CardTitle className="text-2xl">Pro</CardTitle>
                <div className="mt-4 mb-2">
                  <span className="text-4xl font-bold text-white">£349+</span>
                  <span className="text-muted-foreground ml-2">one-off</span>
                </div>
                <CardDescription className="text-base h-12">
                  For high-earning or Ltd company drivers
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-white font-medium">Everything in Standard, plus:</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Bookkeeping</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Multi-vehicle tracking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">HMRC enquiry support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Year-round support</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/assistant" className="w-full">
                  <Button variant="outline" className="w-full h-12 text-md border-border hover:bg-secondary">
                    Contact us
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
          
          <div className="mt-16 flex items-center justify-center text-sm text-muted-foreground bg-secondary/30 py-4 px-6 rounded-2xl max-w-2xl mx-auto">
            <Info className="w-5 h-5 mr-3 text-primary shrink-0" />
            <p>Did you know accounting fees are a valid business expense? You can deduct the cost of Taxly on your tax return.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
