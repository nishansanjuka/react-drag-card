import type { Metadata } from "next";
import "./globals.css";
import { Raleway } from "next/font/google";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "React Drag card",
  description:
    "This project showcases a reusable React component called DraggableWrapper that allows users to drag, resize, maximize, and minimize a customizable UI element. The component provides a smooth, responsive, and highly configurable way to display dynamic content within a resizable window. It is designed to be easily integrated into a variety of applications that require flexible, interactive UI elements.",
};
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("dark", raleway.className)}>{children}</body>
    </html>
  );
}
