'use server';

/**
 * @fileOverview A threat summary AI agent.
 *
 * - generateThreatSummary - A function that handles the threat summary process.
 * - GenerateThreatSummaryInput - The input type for the generateThreatSummary function.
 * - GenerateThreatSummaryOutput - The return type for the generateThreatSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateThreatSummaryInputSchema = z.object({
  email: z.string().describe('The user\'s email address.'),
  domain: z.string().describe('The user\'s domain.'),
});
export type GenerateThreatSummaryInput = z.infer<typeof GenerateThreatSummaryInputSchema>;

const GenerateThreatSummaryOutputSchema = z.object({
  threatSummary: z.string().describe('A summary of potential cybersecurity threats and attack vectors.'),
});
export type GenerateThreatSummaryOutput = z.infer<typeof GenerateThreatSummaryOutputSchema>;

export async function generateThreatSummary(input: GenerateThreatSummaryInput): Promise<GenerateThreatSummaryOutput> {
  return generateThreatSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateThreatSummaryPrompt',
  input: {schema: GenerateThreatSummaryInputSchema},
  output: {schema: GenerateThreatSummaryOutputSchema},
  prompt: `You are a cybersecurity expert. Provide a summary of potential cybersecurity threats and attack vectors for the given email and domain.\n\nEmail: {{{email}}}\nDomain: {{{domain}}}`,
});

const generateThreatSummaryFlow = ai.defineFlow(
  {
    name: 'generateThreatSummaryFlow',
    inputSchema: GenerateThreatSummaryInputSchema,
    outputSchema: GenerateThreatSummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
