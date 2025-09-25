import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CheckCircle } from "lucide-react";

const teamMembers = [
  { name: "Alex Johnson", role: "Founder & CEO", avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d" },
  { name: "Maria Garcia", role: "Chief Technology Officer", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d" },
  { name: "David Chen", role: "Head of Threat Research", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704e" },
  { name: "Sarah Williams", role: "Lead Incident Responder", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704f" },
];

const values = [
  "Proactive Defense: We believe in anticipating threats, not just reacting to them.",
  "Unwavering Integrity: Trust is the cornerstone of security. We operate with complete transparency.",
  "Continuous Innovation: The threat landscape evolves, and so do we. We are committed to perpetual learning.",
  "Client Partnership: We succeed when you are secure. We work as an extension of your team.",
];

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-20">
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline text-accent">About IntelX</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
          We are a team of dedicated cybersecurity experts committed to providing unparalleled digital protection for businesses of all sizes.
        </p>
      </section>

      <section className="mt-16 grid gap-12 md:grid-cols-2 md:items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl font-bold tracking-tighter font-headline">Our Mission</h2>
          <p className="mt-4 text-muted-foreground">
            In an increasingly interconnected world, our mission is to deliver peace of mind through robust, intelligent, and proactive cybersecurity solutions. We empower organizations to innovate and grow, secure in the knowledge that their digital assets are protected by industry-leading experts and cutting-edge technology.
          </p>
          <div className="mt-6">
            <h3 className="text-2xl font-bold tracking-tighter font-headline">Our Core Values</h3>
            <ul className="mt-4 space-y-3">
              {values.map((value, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-muted-foreground">{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <Image
            src="https://picsum.photos/seed/aboutus/800/600"
            alt="IntelX team collaborating"
            data-ai-hint="team meeting"
            width={800}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      <section className="mt-20">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Meet Our Leadership</h2>
          <p className="mt-4 text-muted-foreground">
            The architects of your digital defense.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <Card key={member.name} className="text-center">
              <CardContent className="p-6">
                <Avatar className="mx-auto h-24 w-24">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>{member.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-primary">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
