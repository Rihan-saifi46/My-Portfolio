import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function TimelineDemo() {
  const data = [
    {
      title: "Alps Insurance · Developer Training (1 Week)",
      content: (
        <div>
          <p className="mb-4 text-sm font-normal">
            One-week developer-focused training experience involving:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Learning fundamentals of web development workflows</li>
            <li>Understanding real-world project structure</li>
            <li>Assisting developers with minor frontend tasks</li>
            <li>Getting exposure to team workflow & development cycle</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Detechie Digital Academy Pvt. Ltd · Internship (6 Months)",
      content: (
        <div>
          <p className="mb-4 text-sm font-normal">
            FullStack Developer Intern
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>FDeveloped full-stack web applications using React.js, Next.js, Node.js, Express.js, and MongoDB for client projects</li>
            <li>Built RESTful APIs with Express.js, implementing CRUD operations, JWT authentication, and data validation</li>
            <li>Designed responsive React components using Tailwind CSS, ensuring pixel-perfect UI/UX across devices</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
