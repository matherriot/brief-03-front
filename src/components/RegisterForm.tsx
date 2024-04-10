"use client";
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/utils/cn";
import {toast} from "sonner";
import {doRegisterRequest, getAccountInfo} from "@/services";

export function RegisterForm() {
  const handleRegisterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // @ts-ignore
    const firstName = document.getElementById('firstName-field').value
    if (!firstName) {
      toast.warning('Fournissez un prénom')
      return
    }
    // @ts-ignore
    const lastName = document.getElementById('lastName-field').value
    if (!lastName) {
      toast.warning('Fournissez un nom de famille')
      return
    }
    // @ts-ignore
    const displayName = document.getElementById('displayName-field').value
    if (!displayName) {
      toast.warning("Fournissez un nom d'affichage")
      return
    }
    // @ts-ignore
    const username = document.getElementById('username-field').value
    if (!username) {
      toast.warning('Fournissez un identifiant');
      return
    }
    // @ts-ignore
    const password = document.getElementById('password-field').value
    if (!password) {
      toast.warning('Fournissez un mot de passe')
      return
    }
    if (password.lenght < 6) {
      toast.warning('Le mot de passe doit contenir au moins 6 caractères');
      return;
    }
    // @ts-ignore
    let gdpr = document.getElementById('gdpr-field').value
    if (!gdpr) {
      console.log(gdpr)
      toast.warning('Fournissez un mot de passe')
      return
    }
    gdpr === 'on' ? gdpr = true : gdpr = false;

    const result = await doRegisterRequest(firstName, lastName, username, displayName, password, gdpr);
    console.log(result)
    if (result.error === "invalidPassword") {
      toast.error("Informations d'authentification invalide")
    }

    if (result.error === "exist") {
      toast.error("L'utilisateur existe déjà");
      return;
    }
    if (result.error === "none") {
      toast.success(`Bonjour ${result.user.displayName} !`)
      window.localStorage.setItem('jwt', result.jwt)
      await getAccountInfo()
      setTimeout(()=>{
        window.location.reload()
      }, 1500)
    }
    console.log("Form submitted");
  };
  setTimeout(()=>{
    toast.warning(`Attention ce site est un site fictif. \n Ne transmettez pas d'informations réelles.`)
  }, 3000)
  return (
    <div className="max-w-md w-full mx-auto rounded p-2 md:p-4 shadow-input bg-white dark:bg-accent">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Créez votre compte
      </h2>

      <form className="my-4" onSubmit={handleRegisterSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstName-field">Prénom</Label>
            <Input id="firstName-field" placeholder="Jean" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastName-field">Nom</Label>
            <Input id="lastName-field" placeholder="Michel" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="displayName-field">Nom d'affichage</Label>
          <Input
            id="displayName-field"
            placeholder="Jean Mi"
            type="text"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="username-field">Nom d'utilisateur</Label>
          <Input id="username-field" placeholder="jeanmi73xx" type="text" autoComplete={"username"} />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password-field">Mot de passe</Label>
          <Input id="password-field" placeholder="••••••••" type="password" autoComplete={"current-password"} />
        </LabelInputContainer>
        <div className={'p-2 flex flex-row justify-center items-center'}>
          <LabelInputContainer className={'flex flex-row-reverse w-full justify-center items-center gap-1'}>
            <Label htmlFor="gdpr-field">Je consent à l'utilisation de mes données (1ans)</Label>
            <Checkbox id="gdpr-field" />
          </LabelInputContainer>
        </div>
        <button
          className="bg-gradient-to-br relative group/btn from-primary to-accent w-full text-gray-800 font-extrabold dark:text-white rounded-md h-10 shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          S'inscrire &rarr;
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-primary to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-primary to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
                               children,
                               className,
                             }: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
