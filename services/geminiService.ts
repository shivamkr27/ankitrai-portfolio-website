import { GoogleGenAI } from "@google/genai";
import { HERO_CONTENT, SERVICES, PROJECTS, EXPERIENCE } from '../constants';

// Initialize Gemini Client
// In a real production app, ensure API_KEY is strictly checked.
// For this demo, we handle the case where it might be missing gracefully in the UI.
const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
You are the AI Assistant for Ankit Rai's professional cybersecurity portfolio. 
Your goal is to answer visitor questions professionally, concisely, and persuasively to help them decide to hire Ankit.

Use the following context about Ankit:
- Name: ${HERO_CONTENT.name}
- Title: ${HERO_CONTENT.title}
- Intro: ${HERO_CONTENT.intro}
- Services offered: ${SERVICES.map(s => s.title + " (" + s.description + ")").join(", ")}
- Key Projects: ${PROJECTS.map(p => p.title).join(", ")}
- Experience: ${EXPERIENCE.map(e => e.role + " at " + e.organization).join(", ")}

Guidelines:
1. Be professional, polite, and authoritative (like a cybersecurity consultant).
2. If asked for contact, suggest using the "Book Consultation" button or Contact form.
3. Keep answers under 100 words.
4. If asked something unrelated to cybersecurity or Ankit's professional work, politely steer back to his services.
`;

export const sendMessageToGemini = async (userMessage: string): Promise<string> => {
  if (!apiKey) {
    return "Cyber Assistant Offline: API Key not configured in environment.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    return response.text || "I processed that, but received no text response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Secure connection interrupted. Please try again later.";
  }
};
