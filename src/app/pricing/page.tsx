import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

// In a real app, this data would be fetched from a database (e.g., Firestore)
const pricingPlans = [
  {
    name: "Essential",
    price: "499",
    billing: "/ mo / per asset",
    description: "For small businesses starting their security journey.",
    features: [
      "Monthly Vulnerability Scans",
      "Basic Threat Monitoring",
      "Security Best Practice Report",
      "Email Support",
    ],
    isPopular: false,
  },
  {
    name: "Professional",
    price: "999",
    billing: "/ mo / per asset",
    description: "For growing businesses needing proactive defense.",
    features: [
      "Weekly Vulnerability Scans",
      "24/7 Threat Monitoring (MDR)",
      "Endpoint Detection & Response",
      "Cloud Security Posture Check",
      "Priority Phone & Email Support",
    ],
    isPopular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    billing: "",
    description: "For large organizations with complex security needs.",
    features: [
      "Continuous Vulnerability Scanning",
      "Managed SIEM & SOC",
      "Incident Response Retainer",
      "Red Team Engagements",
      "Virtual CISO (vCISO) Services",
      "Dedicated Account Manager",
    ],
    isPopular: false,
  },
];

export default async function PricingPage() {
  // TODO: Replace with dynamic data fetching from Firestore
  const plans = pricingPlans;

  return (
    <div className="container py-12 md:py-20">
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline text-accent">Pricing Plans</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
          Scalable, transparent pricing to fit your security needs and budget.
        </p>
      </section>

      <section className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-start">
        {plans.map((plan) => (
          <Card key={plan.name} className={`flex flex-col ${plan.isPopular ? 'border-primary border-2 shadow-primary/20 shadow-lg' : ''}`}>
            <CardHeader className="relative">
              {plan.isPopular && (
                <div className="absolute top-0 right-6 -translate-y-1/2 rounded-full bg-primary px-3 py-1 text-sm font-semibold text-primary-foreground">
                  Most Popular
                </div>
              )}
              <CardTitle className="text-2xl font-headline">{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price.startsWith("Custom") ? "" : "$"} {plan.price}</span>
                <span className="text-muted-foreground">{plan.billing}</span>
              </div>
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="mr-3 h-5 w-5 text-accent" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full" variant={plan.isPopular ? 'default' : 'secondary'}>
                <Link href="/contact">{plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </section>
    </div>
  );
}
