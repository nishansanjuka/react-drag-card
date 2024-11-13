"use client";
import {
  useYoutubePlayer,
  YoutubePlayerWithSeekbar,
} from "@nishansanjuka/react-yt-framer";
import { FC } from "react";
import { Button } from "./ui/button";
import { Pause, Play } from "lucide-react";
import { secondsToDuration } from "@/lib/utils";

export const YoutubeCard: FC = () => {
  const { currentTime, play, pause, isPlaying } = useYoutubePlayer();
  return (
    <div className="relative aspect-video w-full">
      <YoutubePlayerWithSeekbar videoId="3KtWfp0UopM" className="rounded-md" />

      <div className="fixed bottom-0 left-0 w-screen p-4 flex flex-col items-center justify-center">
        <p>{secondsToDuration(currentTime)}</p>
        <section className="flex items-center space-x-2">
          <Button
            onClick={isPlaying ? pause : play}
            variant={"outline"}
            size={"icon"}
          >
            {isPlaying ? <Pause /> : <Play />}
          </Button>
        </section>
      </div>
    </div>
  );
};
