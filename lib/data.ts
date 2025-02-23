export interface AIApp {
  name: string;
  description: string;
  url: string;
}

export const aiApps: AIApp[] = [
  {
      "name": "Multiple Choice Question Generator",
      "description": "Generates Multiple Choice questions with answers and explanation",
      "url": "https://kaelvi-gen.streamlit.app/"
  },
  {
      "name": "Alien PDF Chat",
      "description": "Ask Your Friendly Alien - PDF chat",
      "url": "https://alienudan-oru-pdf-uraiyadal.streamlit.app"
  },
  {
      "name": "Tweet Generator",
      "description": "Generate Tweet on the topic given",
      "url": "https://ai-tweet-gen.streamlit.app/"
  },
  {
      "name": "Youtube Video Summarizer",
      "description": "Extracts Transcript from youtube Video and Summarize it",
      "url": "https://youtube-sara-chat.streamlit.app/"
  },
  {
      "name": "Calori Concious",
      "description": "Give Image of the food you are Eating, approx calorie is suggested",
      "url": "https://calori-conscious.streamlit.app/"
  },
  {
      "name": "Kathai Gen",
      "description": "Generate an image based on a topic and using the image a story is created",
      "url": "https://kathai-gen.streamlit.app/"
  },
  {
      "name": "Kathai paeyer Gen",
      "description": "Generate a Title of a Tamil story, given the story. Uses Fine tuned model",
      "url": "https://kathai-paeyar-gen.streamlit.app/"
  },
  {
      "name": "Kootta Suruki",
      "description": "Creates Summary of meeting in text given audio input",
      "url": "https://kootta-suruki.streamlit.app/"
  },
  {
      "name": "Subtitle Generator",
      "description": "Generates subtitle for the audio file uploaded",
      "url": "https://thunai-vasana-gen.streamlit.app/"
  },
  {
      "name": "Laya Bot",
      "description": "A simple chat gpt replacement",
      "url": "https://laya-bot.streamlit.app/"
  }
];