import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider"
import {
  TooltipProvider,
} from "@/components/ui/tooltip"

import '@fontsource/ubuntu';
import "./globals.css";
import React from "react";
import {Toaster} from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Yidhra ToolBox",
  description: "Generated and modify your project",
};

export interface RootLayoutProps {
  children: React.ReactNode;
}

const BODY_CLASS_NAME = "flex min-h-screen w-screen overflow-x-hidden";
const DIV_CLASS_NAME = "min-h-full w-full dark:bg-grid-small-white/[0.4] bg-grid-small-black/[0.6] relative flex flex-col justify-between items-center dark:bg-stone-950 text-primary transition-all duration-200 ease-in-out overflow-x-hidden";

export default function RootLayout({children}: RootLayoutProps) {

  return (
    <html lang="en">
    <body className={BODY_CLASS_NAME}>
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      //disableTransitionOnChange
    >
      <TooltipProvider>
        <Toaster/>
        <div className={DIV_CLASS_NAME}>
          {/* Radial gradient for the container to give a faded look */}
          {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div> */}
          {children}
        </div>
      </TooltipProvider>
    </ThemeProvider>
    </body>
    </html>
  );
}
