import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { padStart } from "lodash";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function secondsToDuration(seconds: number) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);

  return `${padStart(hours.toString(), 2, "0")}:${padStart(
    minutes.toString(),
    2,
    "0"
  )}:${padStart(secs.toString(), 2, "0")}`;
}
