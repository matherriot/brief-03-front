"use client"

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";


import Image from "next/image";
import Link from "next/link";
import React from "react";
import { cn } from "@/utils/cn";
import {Header} from "@/components/Header";
import {getAccountInfo, getLocalStorageValue, getUserData, UserData} from "@/services";
import ThreadCard from "@/components/ThreadCard";

export default function UserThreads() {
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
        <div className={'m-4'}>
          <ThreadCard id={"101010111011101010110"} title={"Annonce test mise en forme"} subTitle={"Cet annonce sert pour les test de mise en forme"} base64Banner={"https://images.unsplash.com/photo-1712675003032-0b9352c77ca7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} desc={"lorem ipsum"} price={9.99} userId={"1010101001010100010110"}/>
        </div>
        <div>
          <p className={'italic font-light text-sm'}>Made by Mathis Herriot</p>
        </div>
      </main>
    </>
  );
}
