import Image from "next/image";

export default function About() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-6 lg:px-20 grid lg:grid-cols-2 gap-16 items-start">

        {/* Left Image */}
        <div className="relative w-full h-125 rounded-2xl overflow-hidden shadow-xl shadow-red-900/40">
          <Image
            src="/profile.png"
            alt="Vinay Pandey"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="space-y-6">

          {/* Title + Tagline */}
          <h1 className="text-5xl font-extrabold leading-tight">
            A Full-Stack Vision for the Modern Web
          </h1>

          <p className="text-xl text-gray-300">
            Crafting scalable, human-centered digital experiences.
          </p>

          {/* Detailed Description */}
          <p className="text-gray-400 leading-relaxed text-[17px]">
            Exploring the intersection of technology, design, and user-focused
            engineering, I build applications that are fast, intuitive, and
            reliable. My work blends clean frontend systems with powerful backend
            architecture — transforming ideas into products that deliver real
            impact.
          </p>

          <p className="text-gray-400 leading-relaxed text-[17px]">
            With experience across the full development cycle, I create solutions
            using React, Next.js, Tailwind CSS, Node.js, Express, MongoDB, REST
            APIs, authentication systems, performance optimization, and scalable
            infrastructure. My approach combines technical precision with creative
            problem-solving to craft seamless digital experiences.
          </p>

          {/* Skill Bullets */}
          <div className="grid grid-cols-2 gap-3 text-gray-300 text-sm pt-2">
            {[
              "React / Next.js",
              "Tailwind CSS",
              "Node.js / Express",
              "MongoDB & REST APIs",
              "Authentication Systems",
              "Performance Optimization",
            ].map((skill, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                {skill}
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-6">
            <a
              href="/contact"
              className="px-6 py-3 bg-red-500 rounded-full font-semibold hover:bg-red-600 transition"
            >
              Let’s Connect
            </a>
            <a
              href="/vinay_resume.pdf"
              className="px-6 py-3 border border-gray-600 rounded-full font-semibold hover:bg-gray-800 transition"
            >
              View Resume
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
