"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";

export default function AnimatedPinDemo() {
  return (
    <div
      className="w-full grid 
      grid-cols-1           
      sm:grid-cols-2        
      lg:grid-cols-3        
      gap-10 
      items-center justify-center 
      mt-20 px-6"
    >
      <PinContainer title="Job Portal" href="https://job-port1.netlify.app">
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-60">
          <h3 className="font-bold text-base text-slate-100">Job Portal</h3>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-linear-to-br">
            <img src="/jobPortal.png" alt="" />
          </div>
        </div>
      </PinContainer>

      <PinContainer title="E-commerce" href="https://job-port1.netlify.app">
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-60">
          <h3 className="font-bold text-base text-slate-100">E-commerce</h3>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-linear-to-br">
            <img src="/jobPortal.png" alt="" />
          </div>
        </div>
      </PinContainer>

      <PinContainer title="Movie-app" href="https://movie-we.netlify.app">
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-60">
          <h3 className="font-bold text-base text-slate-100">Movie-app</h3>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-linear-to-br">
            <img src="/movie-app.png" alt="" />
          </div>
        </div>
      </PinContainer>

      <PinContainer title="Ai-Chatbot" href="https://aichat-1.netlify.app">
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-60">
          <h3 className="font-bold text-base text-slate-100">Ai-Chatbot</h3>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-linear-to-br">
            <img src="/aichatbot.png" alt="" />
          </div>
        </div>
      </PinContainer>

      <PinContainer title="LMS" href="https://job-port1.netlify.app">
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-60">
          <h3 className="font-bold text-base text-slate-100">LMS</h3>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-linear-to-br">
            <img src="/jobPortal.png" alt="" />
          </div>
        </div>
      </PinContainer>

      <PinContainer title="Job Portal" href="https://job-port1.netlify.app">
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-60">
          <h3 className="font-bold text-base text-slate-100">Job Portal</h3>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-linear-to-br">
            <img src="/jobPortal.png" alt="" />
          </div>
        </div>
      </PinContainer>
    </div>
  );
}
