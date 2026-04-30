import { useEffect, useState } from "react";

export type Lang = "en" | "ro" | "pl" | "bg" | "lt" | "es" | "pt" | "it" | "ru" | "uk";

export const LANGUAGES: { code: Lang; label: string; flag: string }[] = [
  { code: "en", label: "English",    flag: "🇬🇧" },
  { code: "ro", label: "Română",     flag: "🇷🇴" },
  { code: "pl", label: "Polski",     flag: "🇵🇱" },
  { code: "bg", label: "Български",  flag: "🇧🇬" },
  { code: "lt", label: "Lietuvių",   flag: "🇱🇹" },
  { code: "es", label: "Español",    flag: "🇪🇸" },
  { code: "pt", label: "Português",  flag: "🇵🇹" },
  { code: "it", label: "Italiano",   flag: "🇮🇹" },
  { code: "ru", label: "Русский",    flag: "🇷🇺" },
  { code: "uk", label: "Українська", flag: "🇺🇦" },
];

const STORAGE_KEY = "taxbuddy.lang";

export function getStoredLang(): Lang {
  if (typeof window === "undefined") return "en";
  const v = localStorage.getItem(STORAGE_KEY);
  return (LANGUAGES.find((l) => l.code === v)?.code as Lang) ?? "en";
}

export function setStoredLang(code: Lang) {
  localStorage.setItem(STORAGE_KEY, code);
  window.dispatchEvent(new CustomEvent("taxbuddy-lang", { detail: code }));
}

export function useLang(): Lang {
  const [lang, setLang] = useState<Lang>(getStoredLang);
  useEffect(() => {
    const onChange = (e: Event) => setLang((e as CustomEvent).detail as Lang);
    window.addEventListener("taxbuddy-lang", onChange);
    return () => window.removeEventListener("taxbuddy-lang", onChange);
  }, []);
  return lang;
}
