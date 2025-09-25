"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import React, { useState, useTransition } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Zap } from "lucide-react";
import { generateThreatSummary } from "@/ai/flows/generate-threat-summary";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  domain: z.string().min(3, { message: "Domain must be at least 3 characters." }).regex(/^[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/, { message: "Please enter a valid domain." }),
});

async function getThreatSummary(data: { email: string; domain: string }) {
    "use server";
    try {
        const result = await generateThreatSummary(data);
        return { success: true, data: result };
    } catch(error: any) {
        console.error("Error generating threat summary:", error);
        return { success: false, error: error.message || "An unknown error occurred." };
    }
}

export default function ThreatAnalysisPage() {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const [summary, setSummary] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      domain: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setSummary(null);
    startTransition(async () => {
      const result = await getThreatSummary(values);
      if (result.success) {
        setSummary(result.data.threatSummary);
        toast({
          title: "Analysis Complete",
          description: "Your threat summary has been generated.",
        });
      } else {
        toast({
          variant: "destructive",
          title: "Analysis Failed",
          description: result.error,
        });
      }
    });
  }

  return (
    <div className="container py-12 md:py-20">
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline text-accent">AI-Powered Threat Summary</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
          Enter an email and domain to generate a high-level summary of potential cybersecurity threats and attack vectors.
        </p>
      </section>

      <section className="mt-16 mx-auto max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Zap className="text-primary"/> Request Analysis</CardTitle>
            <CardDescription>Our AI will analyze the inputs to provide relevant threat intelligence.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="analyst@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="domain"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Domain to Analyze</FormLabel>
                      <FormControl>
                        <Input placeholder="example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isPending} className="w-full">
                  {isPending ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating...</> : "Generate Summary"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        {(isPending || summary) && (
            <Card className="mt-8">
                 <CardHeader>
                    <CardTitle>Analysis Result</CardTitle>
                </CardHeader>
                <CardContent>
                    {isPending && (
                        <div className="flex items-center justify-center p-8">
                             <Loader2 className="mr-2 h-8 w-8 animate-spin text-primary" />
                             <p className="text-muted-foreground">AI is analyzing...</p>
                        </div>
                    )}
                    {summary && (
                        <div className="prose prose-invert max-w-none">
                            <p className="font-code whitespace-pre-wrap">{summary}</p>
                        </div>
                    )}
                </CardContent>
            </Card>
        )}
      </section>
    </div>
  );
}
