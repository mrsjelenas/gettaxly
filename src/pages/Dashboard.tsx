import { useEffect, useState } from "react";
import { Link } from "wouter";
import { useAuth } from "@workspace/replit-auth-web";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Calendar, FileText, MessageCircle, AlertCircle, ArrowRight, Crown } from "lucide-react";

interface DashboardData {
  user: { firstName: string | null; lastName: string | null; email: string | null };
  subscription: { plan: string; status: string } | null;
  taxYear: {
    taxYear: string;
    filingStatus: string;
    totalIncomePence: number;
    totalExpensesPence: number;
    estimatedTaxPence: number;
  };
  deadline: { date: string; daysRemaining: number };
  documents: Array<{ id: number; name: string; kind: string; createdAt: string }>;
  chatHistory: Array<{ id: number; role: string; content: string; createdAt: string }>;
}

const PLAN_LABELS: Record<string, string> = {
  free: "Free",
  driver: "Driver — £14.99/mo",
  driver_pro: "Driver Pro — £29.99/mo",
};

const FILING_LABELS: Record<string, string> = {
  not_started: "Not started",
  in_progress: "In progress",
  ready_to_file: "Ready to file",
  filed: "Filed",
};

function pence(p: number) {
  return `£${(p / 100).toFixed(2)}`;
}

export default function Dashboard() {
  const { isLoading: authLoading, isAuthenticated, login } = useAuth();
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Dashboard | Taxly UK";
  }, []);

  useEffect(() => {
    if (!isAuthenticated) {
      setLoading(false);
      return;
    }
    fetch("/api/me/dashboard", { credentials: "include" })
      .then((r) => r.json())
      .then((d) => setData(d))
      .finally(() => setLoading(false));
  }, [isAuthenticated]);

  if (authLoading || loading) {
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
          <h1 className="text-3xl font-bold text-white mb-4">Log in to your dashboard</h1>
          <p className="text-muted-foreground mb-6">
            Track your tax-year status, documents and chat history in one place.
          </p>
          <Button
            onClick={login}
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
          >
            Log in / Sign up
          </Button>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="w-full bg-background pt-32 pb-20 min-h-[60vh] text-center text-muted-foreground">
        Could not load dashboard.
      </div>
    );
  }

  const planLabel = data.subscription
    ? PLAN_LABELS[data.subscription.plan] ?? data.subscription.plan
    : "No plan";

  return (
    <div className="w-full bg-background pt-28 pb-20 min-h-[80vh]">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Hello{data.user.firstName ? `, ${data.user.firstName}` : ""}
            </h1>
            <p className="text-muted-foreground mt-1">UK tax year {data.taxYear.taxYear}</p>
          </div>
          <Link href="/billing">
            <Button variant="outline" className="border-border">
              <Crown className="w-4 h-4 mr-2 text-primary" /> {planLabel}
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-card border-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Calendar className="w-4 h-4" /> Deadline
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white">{data.deadline.daysRemaining} days</div>
              <p className="text-xs text-muted-foreground mt-1">
                Self-Assessment online filing — 31 January
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <AlertCircle className="w-4 h-4" /> Filing status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">
                {FILING_LABELS[data.taxYear.filingStatus] ?? data.taxYear.filingStatus}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {data.taxYear.utrProvided ? "UTR on file" : "UTR not provided yet"}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Estimated tax
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white">
                {pence(data.taxYear.estimatedTaxPence)}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Income {pence(data.taxYear.totalIncomePence)} · Expenses {pence(data.taxYear.totalExpensesPence)}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" /> Documents
              </CardTitle>
              <Link href="/documents">
                <Button variant="ghost" size="sm" className="text-primary">
                  Manage <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </CardHeader>
            <CardContent>
              {data.documents.length === 0 ? (
                <p className="text-sm text-muted-foreground">
                  No documents yet. Upload receipts, invoices, P60s and bank statements.
                </p>
              ) : (
                <ul className="space-y-2">
                  {data.documents.slice(0, 5).map((d) => (
                    <li key={d.id} className="flex items-center justify-between text-sm">
                      <span className="text-white truncate">{d.name}</span>
                      <span className="text-xs text-muted-foreground capitalize">{d.kind}</span>
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-primary" /> Chat history
              </CardTitle>
              <Link href="/assistant">
                <Button variant="ghost" size="sm" className="text-primary">
                  Open helper <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </CardHeader>
            <CardContent>
              {data.chatHistory.length === 0 ? (
                <p className="text-sm text-muted-foreground">
                  No conversations yet. Ask the Tax Helper anything about your UK self-employment.
                </p>
              ) : (
                <ul className="space-y-2 max-h-48 overflow-y-auto">
                  {data.chatHistory.slice(-8).map((m) => (
                    <li key={m.id} className="text-sm">
                      <span
                        className={`text-xs uppercase font-semibold mr-2 ${
                          m.role === "user" ? "text-primary" : "text-muted-foreground"
                        }`}
                      >
                        {m.role === "user" ? "You" : "Helper"}
                      </span>
                      <span className="text-muted-foreground">{m.content.slice(0, 80)}</span>
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
