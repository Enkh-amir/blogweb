import React from "react";
import HomePage from "@/components/pages/HomePage";

export default function Main() {
  return (
    <main>
      <div className="video-background">
        <video
          src="/assets/videoplayback.mp4"
          autoPlay
          muted
          loop
          className="fixed top-0 left-0 w-screen h-screen object-cover overflow-hidden z-[-1] m-0 p-0"
        />
      </div>
      <HomePage />
    </main>
  );
}
