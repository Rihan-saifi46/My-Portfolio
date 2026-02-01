import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function TimelineDemo() {
  const data = [
   
    {
  title: "Sanki the Crazy Attire · Shopify Developer (1.5 Months)",
  content: (
    <div>
      <p className="mb-4 text-sm font-normal">
        Worked as a Shopify Developer, responsible for:
      </p>
      <ul className="list-disc pl-5 space-y-2 text-sm">
        <li>Customizing Shopify themes using Liquid, HTML, CSS, and JavaScript</li>
        <li>Building and modifying store sections, layouts, and UI components</li>
        <li>Improving website responsiveness and performance</li>
        <li>Integrating apps and configuring store features based on business needs</li>
        <li>Fixing bugs and ensuring smooth user experience across devices</li>
        <li>Collaborating with the design and marketing team for store updates</li>
      </ul>
    </div>
  ),
},
{
  title: "Freelance Projects Experience",
  content: (
    <div>
      <p className="mb-4 text-sm font-normal">
        Worked on 3 freelance projects, where I:
      </p>
      <ul className="list-disc pl-5 space-y-2 text-sm">
        <li>Built responsive frontend interfaces</li>
        <li>Converted designs into functional web pages</li>
        <li>Handled client requirements and revisions</li>
        <li>Delivered projects within deadlines</li>
      </ul>
    </div>
  ),
},
{ title: "Alps Insurance · Developer Training (2 Week)", content: ( <div> <p className="mb-4 text-sm font-normal"> Two-week developer-focused training experience involving: </p> <ul className="list-disc pl-5 space-y-2 text-sm"> <li>Learning fundamentals of web development workflows</li> <li>Understanding real-world project structure</li> <li>Assisting developers with minor frontend tasks</li> <li>Getting exposure to team workflow & development cycle</li> </ul> </div> ), },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
