"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `I’m Vinay Pandey, a Full Stack Developer who loves building fast, scalable and user-focused digital products.
I enjoy turning ideas into real-world applications using technologies like React, Next.js, Node.js, Express, MongoDB, and modern UI frameworks like Tailwind CSS.

My focus is on writing clean, efficient code and creating seamless user experiences — from UI design to backend architecture.
`;

export default function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
