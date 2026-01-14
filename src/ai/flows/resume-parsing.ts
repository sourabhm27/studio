'use server';
/**
 * @fileOverview Resume parsing AI agent.
 *
 * - parseResume - A function that handles the resume parsing process.
 * - ParseResumeInput - The input type for the parseResume function.
 * - ParseResumeOutput - The return type for the parseResume function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ParseResumeInputSchema = z.object({
  resumeText: z
    .string()
    .describe('The text content of the resume to be parsed.'),
});
export type ParseResumeInput = z.infer<typeof ParseResumeInputSchema>;

const ParseResumeOutputSchema = z.object({
  name: z.string().optional().describe('The name of the resume owner.'),
  email: z.string().email().optional().describe('The email address of the resume owner.'),
  phone: z.string().optional().describe('The phone number of the resume owner.'),
  skills: z.array(z.string()).optional().describe('The skills listed in the resume.'),
  experience: z.array(z.string()).optional().describe('The experience listed in the resume.'),
  education: z.array(z.string()).optional().describe('The education history listed in the resume.'),
});
export type ParseResumeOutput = z.infer<typeof ParseResumeOutputSchema>;

export async function parseResume(input: ParseResumeInput): Promise<ParseResumeOutput> {
  return parseResumeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'parseResumePrompt',
  input: {schema: ParseResumeInputSchema},
  output: {schema: ParseResumeOutputSchema},
  prompt: `You are an expert resume parser. Extract the following information from the resume text provided.

Resume Text: {{{resumeText}}}

Output the extracted information in JSON format.  If a field cannot be found, omit it from the JSON output. Be as accurate as possible.
Include:
- name: The full name of the resume owner.
- email: The email address of the resume owner.
- phone: The phone number of the resume owner.
- skills: A list of skills mentioned in the resume.
- experience: A list of previous job titles and responsibilities.
- education: A list of degrees and schools attended.
`,
});

const parseResumeFlow = ai.defineFlow(
  {
    name: 'parseResumeFlow',
    inputSchema: ParseResumeInputSchema,
    outputSchema: ParseResumeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
