import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

// In a real app, this data would be fetched from a database (e.g., Firestore)
const resources = [
  {
    id: "1",
    title: "The 2024 Global Threat Landscape: A Deep Dive",
    description: "Our annual report analyzes the top attack vectors, emerging threats, and defensive strategies for the year ahead.",
    type: "Whitepaper",
    date: "2024-07-15",
    imageUrl: "https://picsum.photos/seed/res1/600/400",
    imageHint: "data analysis"
  },
  {
    id: "2",
    title: "Zero Trust Architecture: A Practical Implementation Guide",
    description: "Move beyond the buzzword. This guide provides a step-by-step framework for implementing a Zero Trust model in your organization.",
    type: "Blog Post",
    date: "2024-07-10",
    imageUrl: "https://picsum.photos/seed/res2/600/400",
    imageHint: "network diagram"
  },
  {
    id: "3",
    title: "The Role of AI in Modern Phishing Detection",
    description: "Discover how machine learning algorithms are outsmarting attackers and providing a new layer of email security.",
    type: "Blog Post",
    date: "2024-07-01",
    imageUrl: "https://picsum.photos/seed/res3/600/400",
    imageHint: "artificial intelligence"
  },
    {
    id: "4",
    title: "Securing Your CI/CD Pipeline: Best Practices",
    description: "Learn how to embed security into your development lifecycle to prevent vulnerabilities from ever reaching production.",
    type: "Blog Post",
    date: "2024-06-25",
    imageUrl: "https://picsum.photos/seed/res4/600/400",
    imageHint: "code pipeline"
  }
];

export default async function ResourcesPage() {
    // TODO: Replace with dynamic data fetching from Firestore
    const posts = resources;
    
  return (
    <div className="container py-12 md:py-20">
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline text-accent">Resources</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
          Stay informed with our latest cybersecurity insights, research, and best practices.
        </p>
      </section>

      <section className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Card key={post.id} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-1">
             <CardHeader className="p-0">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  data-ai-hint={post.imageHint}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
            </CardHeader>
            <div className="flex flex-col flex-grow p-6">
                <div className="flex-grow">
                    <Badge variant={post.type === 'Whitepaper' ? 'default' : 'secondary'} className="mb-2">{post.type}</Badge>
                    <CardTitle className="mb-2 text-xl font-headline">{post.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{post.description}</p>
                </div>
                <div className="mt-4 flex justify-between items-center">
                    <p className="text-xs text-muted-foreground">{new Date(post.date).toLocaleDateString()}</p>
                    <Link href="#" className="flex items-center text-sm font-semibold text-primary hover:underline">
                        Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                </div>
            </div>
          </Card>
        ))}
      </section>
    </div>
  );
}
