import { useEffect, useState, type FormEvent } from "react";
import { useAuth } from "@workspace/replit-auth-web";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Trash2, FileText } from "lucide-react";

interface Doc {
  id: number;
  name: string;
  kind: string;
  taxYear: string | null;
  amountPence: number | null;
  notes: string | null;
  createdAt: string;
}

export default function Documents() {
  const { isAuthenticated, isLoading: authLoading, login } = useAuth();
  const [docs, setDocs] = useState<Doc[]>([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [kind, setKind] = useState("receipt");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    document.title = "Documents | Taxly UK";
  }, []);

  const refresh = () => {
    fetch("/api/me/documents", { credentials: "include" })
      .then((r) => r.json())
      .then((d: { documents: Doc[] }) => setDocs(d.documents))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (!isAuthenticated) {
      setLoading(false);
      return;
    }
    refresh();
  }, [isAuthenticated]);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name) return;
    const amountPence = amount ? Math.round(parseFloat(amount) * 100) : null;
    await fetch("/api/me/documents", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ name, kind, amountPence }),
    });
    setName("");
    setAmount("");
    refresh();
  };

  const onDelete = async (id: number) => {
    await fetch(`/api/me/documents/${id}`, { method: "DELETE", credentials: "include" });
    refresh();
  };

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
          <h1 className="text-3xl font-bold text-white mb-4">Log in to manage documents</h1>
          <Button onClick={login} className="bg-primary text-primary-foreground hover:bg-primary/90">
            Log in / Sign up
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-background pt-28 pb-20 min-h-[80vh]">
      <div className="container mx-auto max-w-4xl px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Documents</h1>
        <p className="text-muted-foreground mb-8">
          Keep receipts, invoices, mileage logs and HMRC letters in one place.
        </p>

        <Card className="bg-card border-border mb-8">
          <CardHeader>
            <CardTitle className="text-lg">Add a record</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-3">
              <Input
                placeholder="Description (e.g. Petrol — Shell)"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="md:col-span-2"
              />
              <select
                value={kind}
                onChange={(e) => setKind(e.target.value)}
                className="bg-background border border-border rounded-md px-3 py-2 text-sm"
              >
                <option value="receipt">Receipt</option>
                <option value="invoice">Invoice</option>
                <option value="mileage">Mileage</option>
                <option value="bank_statement">Bank statement</option>
                <option value="hmrc">HMRC letter</option>
                <option value="other">Other</option>
              </select>
              <Input
                placeholder="£ amount"
                type="number"
                step="0.01"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <Button
                type="submit"
                className="md:col-span-4 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Add
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-lg">Your records ({docs.length})</CardTitle>
          </CardHeader>
          <CardContent>
            {docs.length === 0 ? (
              <p className="text-muted-foreground text-sm">No records yet.</p>
            ) : (
              <ul className="divide-y divide-border">
                {docs.map((d) => (
                  <li key={d.id} className="flex items-center justify-between py-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <FileText className="w-5 h-5 text-primary shrink-0" />
                      <div className="min-w-0">
                        <div className="text-white truncate">{d.name}</div>
                        <div className="text-xs text-muted-foreground capitalize">
                          {d.kind.replace("_", " ")}
                          {d.amountPence != null
                            ? ` · £${(d.amountPence / 100).toFixed(2)}`
                            : ""}
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => onDelete(d.id)}>
                      <Trash2 className="w-4 h-4 text-muted-foreground hover:text-red-400" />
                    </Button>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
