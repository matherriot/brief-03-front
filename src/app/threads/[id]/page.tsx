"use client"

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";


import Image from "next/image";
import Link from "next/link";
import React from "react";
import { cn } from "@/utils/cn";
import {Header} from "@/components/Header";
import {getAccountInfo, getLocalStorageValue, getUserData, UserData} from "@/services";

export default function Threads() {
  const userData = getAccountInfo()
  const jwt = getLocalStorageValue('jwt')
  if (!userData || !jwt) {
    setTimeout(()=>{
      window.location.href = "/"
    }, 3000)
    return (
      <>
        <TextGenerateEffect words={"Vous devez etre connecté."}/>
      </>
    );
  }
  return (
    <>
      <main className="flex flex-col items-center justify-between w-full min-h-full">
        <Header/>
        <div id={'threads-container'}>
          Not implemented yet
        </div>
        <div>
          <p className={'italic font-light text-sm'}>Made by Mathis Herriot</p>
        </div>
      </main>
    </>
  );
}
