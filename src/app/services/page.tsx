import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const serviceCategories = [
  {
    category: "Assessment & Testing",
    services: [
      {
        name: "Penetration Testing",
        description: "Simulate real-world attacks to identify and remediate vulnerabilities in your applications, networks, and cloud infrastructure.",
        features: ["Web & Mobile App Testing", "Network Penetration Testing", "Social Engineering Simulation", "Red Team Engagements"],
      },
      {
        name: "Vulnerability Assessments",
        description: "Systematically review your digital assets to identify security weaknesses, providing a prioritized list of actionable recommendations.",
        features: ["Continuous Scanning", "Configuration Audits", "Compliance Mapping (PCI, HIPAA)", "Risk Prioritization"],
      },
    ],
  },
  {
    category: "Managed Security",
    services: [
      {
        name: "24/7 Threat Monitoring (MDR)",
        description: "Our Security Operations Center (SOC) provides round-the-clock monitoring, detection, and response to threats across your environment.",
        features: ["Real-time Log Analysis", "AI-Powered Threat Hunting", "Endpoint Detection & Response (EDR)", "Managed SIEM"],
      },
      {
        name: "Cloud Security Posture Management (CSPM)",
        description: "Ensure your AWS, Azure, and GCP environments are configured securely and remain compliant with industry best practices.",
        features: ["Misconfiguration Detection", "Identity & Access Management Review", "Compliance Automation", "Threat Detection in Cloud"],
      },
    ],
  },
  {
    category: "Consulting & Response",
    services: [
      {
        name: "Incident Response Retainer",
        description: "Get immediate access to our elite incident response team to contain breaches, investigate root causes, and restore operations swiftly.",
        features: ["Guaranteed SLA", "Digital Forensics", "Malware Analysis", "Post-Incident Reporting"],
      },
      {
        name: "Virtual CISO (vCISO)",
        description: "Leverage the strategic expertise of a Chief Information Security Officer without the cost of a full-time executive.",
        features: ["Security Strategy & Roadmap", "Policy Development", "Board-Level Reporting", "Vendor Risk Management"],
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="container py-12 md:py-20">
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline text-accent">Our Services</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
          A comprehensive portfolio of cybersecurity solutions designed to protect your organization from every angle.
        </p>
      </section>

      <div className="mt-16 space-y-16">
        {serviceCategories.map((category) => (
          <section key={category.category}>
            <h2 className="mb-8 text-3xl font-bold tracking-tighter font-headline text-center">{category.category}</h2>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {category.services.map((service) => (
                <Card key={service.name} className="flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-2xl font-headline">{service.name}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                           <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                           <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
