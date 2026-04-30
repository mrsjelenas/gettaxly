import { Link } from "wouter";
import { Car } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 inline-flex">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground">
                <Car className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">Taxly</span>
            </Link>
            <p className="text-muted-foreground max-w-sm">
              The friendly, independent UK tax helper built specifically for gig drivers and couriers. We make HMRC less scary.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/drivers" className="text-muted-foreground hover:text-primary transition-colors">For Drivers</Link></li>
              <li><Link href="/pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link href="/assistant" className="text-muted-foreground hover:text-primary transition-colors">Tax Helper</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col items-center text-center">
          <p className="text-xs text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Taxly is an independent UK service — we are not HMRC. Estimates only; final filing reviewed by qualified accountants.
          </p>
          <p className="text-xs text-muted-foreground/60 mt-4">
            &copy; {new Date().getFullYear()} Taxly. Built by drivers, for drivers.
          </p>
        </div>
      </div>
    </footer>
  );
}
