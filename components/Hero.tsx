"use client";
import Home from "@/pages/Home";
import Name from '@/pages/Name'
import Skills from '@/pages/Skills'

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center text-center mt-40 px-4 overflow-hidden">
      <h1 className="text-5xl md:text-6xl font-bold">
        I build scalable full-stack products that <br />
        <span className="italic text-gray-200">deliver real impact</span>
      </h1>

      <p className="mt-6 text-lg text-gray-300">
      <Name/>
      </p>
      <Home />
      <Skills/>
    </section>
  );
}
