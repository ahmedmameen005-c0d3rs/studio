import Link from "next/link";
import { Logo } from "@/components/icons";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col gap-4">
            <Link href="/">
              <Logo />
            </Link>
            <p className="text-sm text-muted-foreground">
              Your partner in digital defense.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:col-span-2 md:grid-cols-4">
            <div>
              <h3 className="mb-2 font-semibold">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link></li>
                <li><Link href="/case-studies" className="text-sm text-muted-foreground hover:text-primary">Case Studies</Link></li>
                <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 font-semibold">Services</h3>
              <ul className="space-y-2">
                <li><Link href="/services" className="text-sm text-muted-foreground hover:text-primary">All Services</Link></li>
                <li><Link href="/pricing" className="text-sm text-muted-foreground hover:text-primary">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 font-semibold">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/resources" className="text-sm text-muted-foreground hover:text-primary">Blog</Link></li>
                <li><Link href="/threat-analysis" className="text-sm text-muted-foreground hover:text-primary">AI Threat Summary</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} IntelX Cybersecurity Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
