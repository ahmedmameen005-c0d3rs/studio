import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Shield, Server, Lock, ArrowRight } from "lucide-react";

const services = [
  {
    icon: <Shield className="mb-4 h-12 w-12 text-accent" />,
    title: "Threat Intelligence",
    description: "Proactive identification and analysis of cyber threats to prevent attacks before they happen.",
  },
  {
    icon: <Server className="mb-4 h-12 w-12 text-accent" />,
    title: "Infrastructure Security",
    description: "Comprehensive security assessments and hardening for your network, servers, and cloud environments.",
  },
  {
    icon: <Lock className="mb-4 h-12 w-12 text-accent" />,
    title: "Incident Response",
    description: "Rapid, expert response to contain security breaches and minimize their impact on your business.",
  },
];

const testimonials = [
  {
    name: "Jane Doe",
    title: "CEO, TechCorp",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    text: "IntelX transformed our security posture. Their proactive approach is second to none.",
  },
  {
    name: "John Smith",
    title: "CTO, Innovate LLC",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704e",
    text: "The incident response team at IntelX was incredible. They had us back online securely in record time.",
  },
  {
    name: "Emily White",
    title: "COO, Finance Solutions",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704f",
    text: "Thanks to IntelX's continuous monitoring, we can focus on our business, knowing we're protected.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative py-24 md:py-32 lg:py-40">
        <div
          aria-hidden="true"
          className="absolute inset-0 top-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px]"
        >
          <div className="absolute left-0 top-0 -z-10 h-full w-full bg-[radial-gradient(circle_800px_at_50%_200px,#4b008233,transparent)]"></div>
        </div>
        <div className="container text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Next-Generation</span><br />
            Cybersecurity Solutions
          </h1>
          <p className="mx-auto mt-6 max-w-[700px] text-lg text-muted-foreground md:text-xl">
            IntelX provides cutting-edge, AI-driven security to protect your digital assets from the threats of tomorrow.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact">Get a Free Consultation</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <section id="services" className="py-20 md:py-28 bg-card border-y">
        <div className="container">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
              A Partnership in Digital Defense
            </h2>
            <p className="mt-4 text-muted-foreground">
              We offer a complete suite of services to secure every layer of your organization.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} className="flex flex-col items-center p-8 text-center transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-2">
                {service.icon}
                <CardTitle className="mb-2 font-headline">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 md:py-28">
        <div className="container">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
              Trusted by Industry Leaders
            </h2>
            <p className="mt-4 text-muted-foreground">
              See what our clients have to say about our partnership and impact.
            </p>
          </div>
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="h-full">
                      <CardContent className="flex h-full flex-col justify-between p-6">
                        <p className="mb-6 text-lg italic">"{testimonial.text}"</p>
                        <div className="flex items-center">
                          <Avatar>
                            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="ml-4">
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
      
      <section id="cta" className="border-t">
        <div className="container">
            <div className="my-20 flex flex-col items-center justify-between gap-8 rounded-lg bg-card p-10 text-center md:flex-row md:text-left">
            <div>
                <h2 className="text-3xl font-bold tracking-tighter font-headline">Ready to Elevate Your Security?</h2>
                <p className="mt-2 text-muted-foreground">Let's build a more secure future for your business. Contact us today.</p>
            </div>
            <Button asChild size="lg" className="flex-shrink-0">
                <Link href="/contact">
                    Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
            </div>
        </div>
      </section>
    </div>
  );
}
