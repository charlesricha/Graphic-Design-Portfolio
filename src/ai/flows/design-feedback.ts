// This file is machine-generated - edit with caution!
'use server';
/**
 * @fileOverview An AI-powered design feedback tool.
 *
 * - getDesignFeedback - A function that handles the design feedback process.
 * - DesignFeedbackInput - The input type for the getDesignFeedback function.
 * - DesignFeedbackOutput - The return type for the getDesignFeedback function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DesignFeedbackInputSchema = z.object({
  designBrief: z.string().describe('The design brief to analyze.'),
});
export type DesignFeedbackInput = z.infer<typeof DesignFeedbackInputSchema>;

const DesignFeedbackOutputSchema = z.object({
  feedback: z.string().describe('The AI-powered feedback on the design brief, including creative design direction.'),
});
export type DesignFeedbackOutput = z.infer<typeof DesignFeedbackOutputSchema>;

export async function getDesignFeedback(input: DesignFeedbackInput): Promise<DesignFeedbackOutput> {
  return designFeedbackFlow(input);
}

const prompt = ai.definePrompt({
  name: 'designFeedbackPrompt',
  input: {schema: DesignFeedbackInputSchema},
  output: {schema: DesignFeedbackOutputSchema},
  prompt: `You are an AI-powered design feedback tool. Analyze the design brief provided by the user and provide feedback, including creative design direction, to improve the designs and explore new ideas.\n\nDesign Brief: {{{designBrief}}}`,
});

const designFeedbackFlow = ai.defineFlow(
  {
    name: 'designFeedbackFlow',
    inputSchema: DesignFeedbackInputSchema,
    outputSchema: DesignFeedbackOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
