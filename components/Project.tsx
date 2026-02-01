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
      <PinContainer title="Movie-app" href="https://movie-we.netlify.app">
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-60">
          <h3 className="font-bold text-base text-slate-100">Movie-app</h3>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-linear-to-br">
            <img src="/movie-app.png" alt="" />
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

      <PinContainer
        title="E-commerce"
        href="https://e-commerce-frontend-flame-one.vercel.app/"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-60">
          <h3 className="font-bold text-base text-slate-100">E-commerce</h3>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-linear-to-br">
            <img src="/e-commerce.png" alt="" />
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

      <PinContainer title="Macbook-site" href="https://695bf9af0763dc4cfb53d828--frabjous-mandazi-a44540.netlify.app/">
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-60">
          <h3 className="font-bold text-base text-slate-100">Macbook-site</h3>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-linear-to-br">
            <img src="/mac.png" alt="" />
          </div>
        </div>
      </PinContainer>

      <PinContainer title="Grilli Restaurant" href="https://6919d520872fbc7a96a26a0a--mellow-lokum-5f3443.netlify.app/">
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-60">
          <h3 className="font-bold text-base text-slate-100">Grilli Restaurant</h3>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-linear-to-br">
            <img src="/grilli.png" alt="" />
          </div>
        </div>
      </PinContainer>

      <PinContainer title="Gaming-site" href="https://695bf1450763dc318f53d81a--hilarious-wisp-eb0dcd.netlify.app/">
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-60">
          <h3 className="font-bold text-base text-slate-100">Gaming-site</h3>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-linear-to-br">
            <img src="/game.png" alt="" />
          </div>
        </div>
      </PinContainer>

      <PinContainer title="Mojito-site" href="https://695bf9d0aead7f443c929a69--stellular-cheesecake-12b11e.netlify.app/">
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-60">
          <h3 className="font-bold text-base text-slate-100">Mojito-site</h3>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-linear-to-br">
            <img src="/mohito.png" alt="" />
          </div>
        </div>
      </PinContainer>

      <PinContainer title="Foodie-restaurant" href="https://6919d4dc83be0ac517c12a33--mellow-lokum-5f3443.netlify.app/">
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-60">
          <h3 className="font-bold text-base text-slate-100">Foodie-restaurant</h3>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-linear-to-br">
            <img src="/food.png" alt="" />
          </div>
        </div>
      </PinContainer>
    </div>
  );
}
