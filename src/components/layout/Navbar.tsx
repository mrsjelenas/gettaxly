import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Car, Menu, X, LayoutDashboard, LogOut } from "lucide-react";
import { useState, useEffect } from "react";
import { LanguagePicker } from "@/components/LanguagePicker";
import { useAuth } from "@workspace/replit-auth-web";

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isAuthenticated, isLoading, login, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/drivers", label: "For Drivers" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-primary-foreground transform transition-transform group-hover:scale-105">
              <Car className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">Taxly</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location === link.href ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <LanguagePicker />
            {!isLoading && isAuthenticated && (
              <Link href="/dashboard" className="inline-flex">
                <Button variant="outline" className="border-border hover:bg-secondary">
                  <LayoutDashboard className="w-4 h-4 mr-2" /> Dashboard
                </Button>
              </Link>
            )}
            {!isLoading && !isAuthenticated && (
              <Button
                variant="outline"
                className="border-border hover:bg-secondary"
                onClick={login}
              >
                Log in
              </Button>
            )}
            {!isLoading && isAuthenticated ? (
              <Button
                variant="ghost"
                className="text-muted-foreground hover:text-white"
                onClick={logout}
                title="Log out"
              >
                <LogOut className="w-4 h-4" />
              </Button>
            ) : (
              <Link href="/assistant" className="inline-flex">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-lg shadow-primary/20">
                  Start your tax check
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile right side */}
          <div className="md:hidden flex items-center gap-3">
            <LanguagePicker />
          <button
            className="text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg p-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-4 py-2 rounded-md text-base font-medium ${
                location === link.href ? "bg-secondary text-primary" : "text-muted-foreground hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/assistant" onClick={() => setIsMobileMenuOpen(false)}>
            <Button className="w-full bg-primary text-primary-foreground font-semibold mt-2">
              Start your tax check
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
