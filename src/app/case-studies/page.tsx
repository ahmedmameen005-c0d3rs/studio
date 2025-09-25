import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

// In a real app, this data would be fetched from a database (e.g., Firestore)
const caseStudies = [
  {
    id: "1",
    title: "Fortune 500 Retailer Defeats Advanced Phishing Campaign",
    industry: "Retail",
    challenge: "A sophisticated phishing campaign was targeting employees with CEO impersonation, leading to multiple account compromises.",
    solution: "IntelX deployed its AI-driven email security gateway and conducted targeted employee training. We rapidly identified and blocked malicious emails and contained the breach.",
    outcome: "Reduced phishing-related incidents by 98% within 3 months.",
    imageUrl: "https://picsum.photos/seed/cs1/600/400",
    imageHint: "cyber security"
  },
  {
    id: "2",
    title: "Financial Tech Firm Secures Multi-Cloud Infrastructure",
    industry: "FinTech",
    challenge: "The firm's rapid growth on AWS and Azure led to security misconfigurations and compliance gaps.",
    solution: "Our Cloud Security Posture Management (CSPM) service was implemented, providing continuous monitoring and automated remediation of security risks.",
    outcome: "Achieved 100% compliance with CIS benchmarks and prevented two major data exposure incidents.",
    imageUrl: "https://picsum.photos/seed/cs2/600/400",
    imageHint: "cloud network"
  },
  {
    id: "3",
    title: "Healthcare Provider Recovers from Ransomware Attack in Hours",
    industry: "Healthcare",
    challenge: "A ransomware attack encrypted critical patient data systems, halting hospital operations.",
    solution: "The IntelX Incident Response team was activated, isolating affected systems, eradicating the malware, and restoring data from secure backups within 4 hours.",
    outcome: "Minimized operational downtime and prevented any patient data exfiltration.",
    imageUrl: "https://picsum.photos/seed/cs3/600/400",
    imageHint: "data breach"
  }
];

export default async function CaseStudiesPage() {
    // TODO: Replace with dynamic data fetching from Firestore
    const studies = caseStudies;
    
  return (
    <div className="container py-12 md:py-20">
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline text-accent">Case Studies</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
          Real-world examples of how we solve complex cybersecurity challenges and deliver measurable results.
        </p>
      </section>

      <section className="mt-16 space-y-12">
        {studies.map((study, index) => (
          <Card key={study.id} className="grid overflow-hidden md:grid-cols-2 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
            <div className={`p-8 flex flex-col ${index % 2 === 1 ? 'md:order-2' : ''}`}>
              <Badge variant="secondary" className="w-fit mb-2">{study.industry}</Badge>
              <CardTitle className="mb-4 text-2xl font-headline">{study.title}</CardTitle>
              <div>
                <h3 className="font-semibold">Challenge:</h3>
                <p className="text-muted-foreground mb-4">{study.challenge}</p>
                <h3 className="font-semibold">Solution:</h3>
                <p className="text-muted-foreground mb-4">{study.solution}</p>
              </div>
              <div className="mt-auto pt-4 border-t">
                 <h3 className="font-semibold text-primary">Outcome:</h3>
                 <p className="font-medium">{study.outcome}</p>
              </div>
            </div>
             <div className={`relative min-h-[300px] ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <Image
                    src={study.imageUrl}
                    alt={study.title}
                    data-ai-hint={study.imageHint}
                    fill
                    className="object-cover"
                />
            </div>
          </Card>
        ))}
      </section>
    </div>
  );
}
