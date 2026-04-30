import { useEffect, useState } from "react";
import { useAuth } from "@workspace/replit-auth-web";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from "@/components/ui/card";
import { Check, Crown } from "lucide-react";

const PLANS = [
  {
    id: "free",
    name: "Free",
    price: "£0",
    cadence: "/ forever",
    description: "Try the Tax Helper",
    features: ["5 helper messages per month", "Personal dashboard", "Deadline reminder"],
  },
  {
    id: "driver",
    name: "Driver",
    price: "£14.99",
    cadence: "/ month",
    description: "Stay tax-ready year-round",
    features: [
      "Unlimited Tax Helper chat",
      "Mileage & expense vault",
      "Monthly tax summary",
      "Email + SMS deadline alerts",
      "Self-Assessment filing add-on £149/yr",
    ],
    popular: true,
  },
  {
    id: "driver_pro",
    name: "Driver Pro",
    price: "£29.99",
    cadence: "/ month",
    description: "Full hands-off service",
    features: [
      "Everything in Driver",
      "Self-Assessment filing INCLUDED",
      "Quarterly review with a UK accountant",
      "HMRC enquiry support",
      "Priority response",
    ],
  },
] as const;

interface Sub {
  plan: string;
  status: string;
  agreedToTermsAt: string | null;
}

export default function Billing() {
  const { isAuthenticated, isLoading: authLoading, login } = useAuth();
  const [sub, setSub] = useState<Sub | null>(null);
  const [agreed, setAgreed] = useState(false);
  const [submitting, setSubmitting] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    document.title = "Billing | Taxly UK";
  }, []);

  useEffect(() => {
    if (!isAuthenticated) return;
    fetch("/api/me/subscription", { credentials: "include" })
      .then((r) => r.json())
      .then((d: { subscription: Sub | null }) => setSub(d.subscription));
  }, [isAuthenticated]);

  const subscribe = async (planId: string) => {
    if (planId !== "free" && !agreed) {
      setMessage("Please tick the box to agree to the Terms of Service before continuing.");
      return;
    }
    setSubmitting(planId);
    setMessage(null);
    const res = await fetch("/api/me/subscription", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ plan: planId, agreedToTerms: planId !== "free" ? agreed : undefined }),
    });
    const data = await res.json();
    setSubmitting(null);
    if (!res.ok) {
      setMessage(data.error || "Could not update plan.");
      return;
    }
    setSub(data.subscription);
    if (planId === "free") {
      setMessage("Free plan activated.");
    } else {
      setMessage(
        "Plan reserved. We'll email you a secure Stripe checkout link to complete your first payment.",
      );
    }
  };

  if (authLoading) {
    return (
      <div className="w-full bg-background pt-32 pb-20 min-h-[60vh] text-center text-muted-foreground">
        Loading…
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="w-full bg-background pt-32 pb-20 min-h-[60vh]">
        <div className="container mx-auto max-w-md text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Log in to manage your plan</h1>
          <Button onClick={login} className="bg-primary text-primary-foreground hover:bg-primary/90">
            Log in / Sign up
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-background pt-28 pb-20 min-h-[80vh]">
      <div className="container mx-auto max-w-6xl px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center">
          Choose your plan
        </h1>
        <p className="text-muted-foreground mb-3 text-center">
          Cancel anytime. UK VAT included where applicable.
        </p>

        {sub && (
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 bg-secondary/50 border border-border rounded-full px-4 py-1 text-sm text-white">
              <Crown className="w-4 h-4 text-primary" /> Current plan: <strong>{sub.plan}</strong>
              <span className="text-muted-foreground">· {sub.status}</span>
            </span>
          </div>
        )}

        <div className="bg-secondary/30 border border-border rounded-2xl p-5 mb-8 max-w-3xl mx-auto">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-1 w-5 h-5 accent-primary shrink-0"
            />
            <span className="text-sm text-muted-foreground">
              <strong className="text-white">I have read and agree to the Terms of Service.</strong>{" "}
              I expressly request that work begins immediately and I understand that, in line
              with UK Consumer Contracts Regulations 2013 reg. 36, I waive my 14-day cancellation
              right once work has started, and that subscription fees and any filing fees become
              non-refundable. See{" "}
              <a href="/taxbuddy/terms" className="text-primary underline">Terms §4</a> and{" "}
              <a href="/taxbuddy/privacy" className="text-primary underline">Privacy Policy</a>.
            </span>
          </label>
        </div>

        {message && (
          <div className="text-center mb-6 text-sm text-primary">{message}</div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PLANS.map((p) => {
            const isCurrent = sub?.plan === p.id && sub.status !== "cancelled";
            return (
              <Card
                key={p.id}
                className={`bg-card border ${
                  p.popular
                    ? "border-primary shadow-[0_0_30px_rgba(0,229,255,0.15)] md:-translate-y-2"
                    : "border-border"
                } flex flex-col`}
              >
                <CardHeader>
                  {p.popular && (
                    <div className="text-xs uppercase tracking-wide text-primary font-bold mb-2">
                      Most Popular
                    </div>
                  )}
                  <CardTitle className="text-2xl">{p.name}</CardTitle>
                  <div className="mt-2">
                    <span className="text-4xl font-bold text-white">{p.price}</span>
                    <span className="text-muted-foreground ml-1">{p.cadence}</span>
                  </div>
                  <CardDescription className="mt-2">{p.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`w-full h-11 ${
                      p.popular
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "bg-secondary hover:bg-secondary/80"
                    }`}
                    disabled={isCurrent || submitting === p.id}
                    onClick={() => subscribe(p.id)}
                  >
                    {isCurrent
                      ? "Current plan"
                      : submitting === p.id
                        ? "Processing…"
                        : p.id === "free"
                          ? "Activate Free"
                          : "Subscribe"}
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        <p className="text-xs text-muted-foreground text-center mt-8 max-w-2xl mx-auto">
          Card payments are processed securely by Stripe. By confirming a paid plan you authorise
          recurring billing on the chosen cadence until you cancel from this page.
        </p>
      </div>
    </div>
  );
}
