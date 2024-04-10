'use client'
import React, {SetStateAction, useState} from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"


import {RegisterForm} from "@/components/RegisterForm";
import {LoginForm} from "@/components/LoginForm";
import {disconnect, getAccountInfo, getUserData} from "@/services";
import {CircleUserRound, Library, Unplug, UserCog} from "lucide-react";
import Link from "next/link";

function HeaderAccountContainer() {
    return (
      <>
        <div className="flex items-center justify-center gap-1 m-1">
          <AccountBtn/>
        </div>
      </>
    )
}

function AccountBtn() {
  const [isLoggedIn, setLoggedIn] = useState(false)
  getAccountInfo().then((state: boolean)=>{
    // @ts-ignore
    return setLoggedIn(state);
  })
  //const userData = await initAccountService()
  console.log('LOOP')
  console.log(isLoggedIn)
  if (!isLoggedIn) {
    return (<>
      <Dialog>
        <DialogTrigger className={"h-10 px-4 py-2 bg-primary text-primary-foreground italic hover:bg-accent-foreground dark:hover:bg-accent rounded"}>Connexion</DialogTrigger>
        <DialogContent className={"overflow-hidden"}>
          <DialogHeader>
            <LoginForm/>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger className={"h-10 px-4 py-2 italic rounded bg-accent dark:text-primary-foreground text-accent-foreground dark:hover:bg-primary hover:bg-accent-foreground hover:text-accent"}>Inscription</DialogTrigger>
        <DialogContent className={"overflow-hidden"}>
          <DialogHeader>
            <RegisterForm/>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>)
  } else {
    return (<>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger className={"flex flex-row justify-start gap-1 items-center"}>
            <CircleUserRound />
            <h2>{`${getUserData().displayName}`}</h2>
          </MenubarTrigger>
          <MenubarContent>
            <Link href={"user/thread"}>
              <MenubarItem className={"flex flex-row justify-start gap-1 items-center"}>
                <Library />
                Mes annonces
              </MenubarItem>
            </Link>
            <Link href={"user"}>
              <MenubarItem className={"flex flex-row justify-start gap-1 items-center"}>
                <UserCog />
                Mon compte
              </MenubarItem>
            </Link>
            <MenubarSeparator />
            <MenubarItem className={"flex flex-row justify-start gap-1 items-center"} onClick={disconnect}>
              <Unplug />
              Déconnexion
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </>)
  }
}

export default HeaderAccountContainer;
