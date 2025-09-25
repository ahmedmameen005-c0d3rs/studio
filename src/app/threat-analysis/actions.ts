"use server";

import { generateThreatSummary } from "@/ai/flows/generate-threat-summary";
import { z } from "zod";

const ThreatSummaryInputSchema = z.object({
    email: z.string().email(),
    domain: z.string(),
});

export async function getThreatSummary(data: z.infer<typeof ThreatSummaryInputSchema>) {
    try {
        const validatedData = ThreatSummaryInputSchema.parse(data);
        const result = await generateThreatSummary(validatedData);
        return { success: true, data: result };
    } catch(error: any) {
        console.error("Error generating threat summary:", error);
        return { success: false, error: error.message || "An unknown error occurred." };
    }
}
