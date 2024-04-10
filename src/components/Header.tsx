import React from 'react'
import {Button} from "@/components/ui/button";
import HeaderAccountContainer from "@/components/HeaderAccountContainer";
import {ThemeSelector} from "@/components/theme-selector";

export const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center p-2 w-full">
      <div className="flex items-center justify-between">
        <h1 className={"text-2xl font-bold"}>Brief <em className={"dark:text-primary-foreground text-accent-foreground"}>03</em></h1>
      </div>
      <div className={"flex flex-row justify-center items-center gap-1"}>
        <ThemeSelector/>
        <HeaderAccountContainer/>
      </div>
    </header>
  )
}
export default Header;