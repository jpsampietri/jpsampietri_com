import { ActionProps } from "@/components/templates/ActionGrid";

export const aiDisclaimerProps:ActionProps = {
  id: 'ai-disclaimer',
  header: 'The Learning Laboratory: Personal Projects & Experimentation',
  subtext: 'A curated showcase of my technical curiosity, skill application, and development experiments',
  actions: [
    {
      type: 'image',
      imagePathLight: '/assets/images/tech/GenAIFree.svg',
      imagePathDark: '/assets/images/tech/GenAIFree.svg',
      title: 'Gen AI Free',
      description: 'These projects were built 100% through human effort. The entire development lifecycle—from conceptualization and architecture to writing, testing, and deployment—was executed without the assistance of Generative AI tools.',
    },
    {
      type: 'image',
      imagePathLight: '/assets/images/tech/GenAIEnhanced.svg',
      imagePathDark: '/assets/images/tech/GenAIEnhanced.svg',
      title: 'Gen AI Enhanced',
      description: 'These projects utilized Generative AI tools (e.g., LLMs for debugging, code completion, or documentation) to accelerate the development process. The core logic, architecture, and primary creative direction remain entirely my own, but efficiency gains were achieved through AI assistance',
    },
    {
      type: 'image',
      imagePathLight: '/assets/images/tech/GenAIBased.svg',
      imagePathDark: '/assets/images/tech/GenAIBased.svg',
      title: 'Gen AI Based',
      description: 'These projects are specifically designed to explore, utilize, or showcase features of Generative AI technologies. The AI component is a fundamental, integrated, and often critical part of the project\'s design or function',
    },
  ]
}
