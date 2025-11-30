import React from "react";
import { Code2, Lightbulb, Palette, Rocket } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Project Planning",
    company: "Idea & Requirement Analysis",
    date: "Step 1",
    desc: "Understanding project goals, collecting requirements, and defining milestones with clear timelines and responsibilities.",
    icon: <Lightbulb className="text-yellow-400 w-6 h-6" />,
    color: "bg-yellow-500",
  },
  {
    id: 2,
    title: "Design & Prototyping",
    company: "UI/UX Creation",
    date: "Step 2",
    desc: "Creating wireframes and modern UI mockups that reflect client vision with smooth, interactive user flows.",
    icon: <Palette className="text-pink-400 w-6 h-6" />,
    color: "bg-pink-500",
  },
  {
    id: 3,
    title: "Development",
    company: "MERN Stack Build",
    date: "Step 3",
    desc: "Implementing full-stack functionality with MongoDB, Express, React, and Node.js — ensuring performance and scalability.",
    icon: <Code2 className="text-green-400 w-6 h-6" />,
    color: "bg-green-500",
  },
  {
    id: 4,
    title: "Deployment & Launch",
    company: "Final Testing & Hosting",
    date: "Step 4",
    desc: "Final QA testing, fixing bugs, and deploying the project to production for public access with CI/CD workflow.",
    icon: <Rocket className="text-blue-400 w-6 h-6" />,
    color: "bg-blue-500",
  },
];

const Process = () => {
  return (
    <section id="process" className="relative bg-white text-black-800 py-20 px-6 md:px-16 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-400 opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-green-400 opacity-10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-yellow-400 uppercase tracking-widest font-semibold font-displayer text-sm">— My Workflow</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Project <span className="text-yellow-400 ">Process</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="relative border-l-6 border-yellow-600/40 ml-4 space-y-12">
          {steps.map((step, index) => (
            <div key={step.id} className="relative flex gap-6 pl-8 group">
              {/* Step Dot */}
              <div
                className={`absolute -left-5 top-2 w-10 h-10 ${step.color} flex items-center justify-center rounded-full border-4 border-gray-900 shadow-lg shadow-${step.color}/40 group-hover:scale-110 transition-transform duration-300`}
              >
                {step.icon}
              </div>

              {/* Content */}
              <div className="bg-gray-800/70 border border-gray-700 p-6 h-40 w-260 rounded-xl shadow-md hover:shadow-yellow-300/30 transition-all duration-500 transform hover:-translate-y-1">
                <h3 className="text-xl font-semibold font-display text-black">{step.title}</h3>
                <p className="text-gray-300 text-yellow-400 font-displayer">{step.company}</p>
                <p className="mt-3 text-white leading-relaxed font-displayer">{step.desc}</p>
                <span className="absolute top-2 right-4 text-xs text-green-400">{step.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
