import { useState, useRef, useEffect } from "react";
import { Globe, ChevronDown } from "lucide-react";
import { LANGUAGES, getStoredLang, setStoredLang, type Lang } from "@/lib/language";

export function LanguagePicker() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState<Lang>(getStoredLang());
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const active = LANGUAGES.find((l) => l.code === current) ?? LANGUAGES[0];

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors px-2 py-1 rounded-md border border-border/50 bg-background/40"
        aria-label="Change language"
      >
        <Globe className="w-4 h-4" />
        <span className="text-base leading-none">{active.flag}</span>
        <span className="hidden sm:inline">{active.label}</span>
        <ChevronDown className="w-3 h-3 opacity-60" />
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-48 max-h-72 overflow-auto bg-card border border-border rounded-lg shadow-xl z-50 py-1">
          {LANGUAGES.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                setStoredLang(l.code);
                setCurrent(l.code);
                setOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-3 py-2 text-sm text-left hover:bg-secondary transition-colors ${
                l.code === current ? "text-primary" : "text-foreground"
              }`}
            >
              <span className="text-lg leading-none">{l.flag}</span>
              <span>{l.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
