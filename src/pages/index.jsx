import { useState } from "react";
import HomePage from "@/components/pages/HomePage";
import React from "react";

export default function Main() {
  return (
    <main>
      <div className="video-background">
        <iframe
          className="fixed h-screen pointer-events-none z-0 w-screen scale-[1.2] "
          src="https://www.youtube.com/embed/Y1BmjPeatI4?autoplay=1&loop=1&playlist=Y1BmjPeatI4&mute=1"
          frameBorder="0"
          allow="autoplay"
          allowFullScreen
        ></iframe>
      </div>
      <HomePage />
    </main>
  );
}
