import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";



export const navItems = [
  { label: "Features", href: "#features" },
  { label: "Workflow", href: "#workflow" },
];




export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Real-Time Messaging",
    description:
      "Enables instant communication between users.",
  },
  {
    icon: <Fingerprint />,
    text: "User Authentication",
    description:
      "Secure login system for user accounts.",
  },
  {
    icon: <ShieldHalf />,
    text: "Message History",
    description:
      "Ability to view and search past messages for continuity.",
  },
  {
    icon: <BatteryCharging />,
    text: "Language Selection",
    description:
      "Allow users to select their preferred language from a dropdown menu or settings page.",
  },

 
];

export const checklistItems = [
  {
    title: "Translation Process",
    description:
      "Detected messages are translated into a common language (e.g., English) for internal processing.",
  },
  {
    title: "Feedback Mechanism",
    description:
      "Users can provide feedback on translations and responses to improve accuracy and performance over time.",
  },
  {
    title: "Response Translation",
    description:
      "The generated response is then translated back into the original language of the user.",
  },
  {
    title: "Chat Completion",
    description:
      "The translated message is sent to the chat completion API (e.g., Groq) for generating responses based on the context.",
  },
  
];



export const resourcesLinks = [
  { href: "#", text: "Github" },
  { href: "#", text: "LinkedIn" },
];

