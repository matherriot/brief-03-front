"use client"

import { ThemeSelector } from "@/components/theme-selector";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";


import Image from "next/image";
import Link from "next/link";
import React from "react";
import { cn } from "@/utils/cn";
import {Header} from "@/components/Header";

export default function Home() {

  return (
    <>
      <main className="flex flex-col items-center justify-between w-full min-h-full">
        <Header/>
        <div className={'m-4 w-80 font-extrabold'}>
          <TextGenerateEffect words="Site de petites annonces, chinez vos affaires et donner une seconde vie à ce qui ne vous sert plus." className="text-4xl" />
        </div>
        <div>
          <p className={'italic font-light text-sm'}>Made by Mathis Herriot</p>
        </div>
      </main>
    </>
  );
}
