"use client";

import DraggableWrapper from "@/components/dragble-wrapper";
import { CopyableCode } from "@/components/npm-label";
import { Button } from "@/components/ui/button";
import { YoutubeCard } from "@/components/youtube-card";
import { YoutubePlayerProvider } from "@nishansanjuka/react-yt-framer";
import { ChevronDown, Link2, Maximize, Minimize } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ReactDragCardPage() {
  const [isFullScreen, setIsFullScreen] = useState(false);
  return (
    <div className="relative w-screen h-screen flex items-center justify-center">
      <header className="fixed top-10 w-[90vw] mx-auto flex flex-col items-center left-1/2 -translate-x-1/2 justify-center p-10 space-y-4 border">
        <h1 className="font-extrabold text-3xl">
          React Draggable card wrapper
        </h1>
        <p className="text-clip text-center text-sm text-muted-foreground border p-4  rounded-lg bg-muted">
          This project showcases a reusable React component called
          DraggableWrapper that allows users to drag, resize, maximize, and
          minimize a customizable UI element. The component provides a smooth,
          responsive, and highly configurable way to display dynamic content
          within a resizable window. It is designed to be easily integrated into
          a variety of applications that require flexible, interactive UI
          elements.
        </p>
        <span className="flex space-x-2">
          <span className="bg-muted p-1 rounded-full px-2 font-mono">
            iframe library :
            <span className="bg-muted-foreground rounded-full ml-2 px-2 py-1 text-background">
              npm install @nishansanjuka/react-yt-framer@1.1.0
            </span>
          </span>
          <CopyableCode code="npm install @nishansanjuka/react-yt-framer@1.1.0" />
        </span>

        <Link
          className=" text-muted-foreground border-b space-x-1 flex items-center pb-1 font-medium"
          href={
            "https://github.com/nishansanjuka/react-drag-card/tree/main/components/dragble-wrapper.tsx"
          }
        >
          <Link2 />
          <span>go to wrapper</span>
        </Link>
      </header>
      <DraggableWrapper
        title={"Google — 25 Years in Search: The Most Searched"}
        width="min-w-96"
        height="auto"
        defaultPosition={{
          x: window.innerWidth / 2 - 192,
          y: window.innerHeight / 2 - 108,
        }}
        fullScreenWidth="60%"
        fullScreenHeight="auto"
        onFullScreenChange={setIsFullScreen}
        maximizeButton={
          <Button variant={"outline"} size={"icon"} className="rounded-md p-2">
            {isFullScreen ? (
              <Minimize strokeWidth={3} className="size-4" />
            ) : (
              <Maximize strokeWidth={3} className="size-4" />
            )}
          </Button>
        }
        minimizeButton={
          <Button variant={"outline"} size={"icon"} className="rounded-md p-2">
            <ChevronDown strokeWidth={3} className="size-4" />
          </Button>
        }
      >
        <YoutubePlayerProvider>
          <YoutubeCard />
        </YoutubePlayerProvider>
      </DraggableWrapper>
    </div>
  );
}
