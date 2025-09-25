import { ShieldCheck } from "lucide-react";

export const Logo = () => (
  <div className="flex items-center gap-2">
    <ShieldCheck className="h-8 w-8 text-primary" />
    <span className="text-xl font-bold tracking-tighter text-foreground">IntelX</span>
  </div>
);
