"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-0 w-full flex justify-center z-[200]">
      <div className="backdrop-blur-md bg-white/10 px-8 py-3 rounded-full border border-white/20 flex items-center justify-between w-[90%] md:w-auto">
        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          <a href="/" className="text-white hover:opacity-70">
            Home
          </a>
          <a href="/about" className="text-white hover:opacity-70">
            About
          </a>
          <a href="/projects" className="text-white hover:opacity-70">
            Projects
          </a>
          <a href="/experience" className="text-white hover:opacity-70">
            Experience
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-20 w-[90%] mx-auto backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl py-5 px-8 flex flex-col space-y-6 text-center transition">
          <a
            onClick={() => setIsOpen(false)}
            href="/"
            className="text-white hover:opacity-70"
          >
            Home
          </a>
          <a
            onClick={() => setIsOpen(false)}
            href="/about"
            className="text-white hover:opacity-70"
          >
            About
          </a>
          <a
            onClick={() => setIsOpen(false)}
            href="/projects"
            className="text-white hover:opacity-70"
          >
            Projects
          </a>
          <a
            onClick={() => setIsOpen(false)}
            href="/experience"
            className="text-white hover:opacity-70"
          >
            Experience
          </a>
        </div>
      )}
    </nav>
  );
}
