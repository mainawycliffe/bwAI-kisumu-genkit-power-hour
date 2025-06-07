import { gemini25ProPreview0325, googleAI } from '@genkit-ai/googleai';
import { genkit, z } from 'genkit';
import * as c from "cheerio";
import { convert } from 'html-to-text';


const ai = genkit({
  plugins: [googleAI()],
  model: gemini25ProPreview0325,
});

const webpageSummarizer = ai.defineFlow({
  name: 'Web Page URL Simmarizer',
  inputSchema: z.object({
    prompt: z.string()
  }),
  outputSchema: z.string(),
}, async ({prompt}) => {

  const { text } = await ai.generate({
    prompt: `
      ${prompt}
    
    `
  })

  return text;
});

