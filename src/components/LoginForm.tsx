"use client";
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/utils/cn";
import { toast } from "sonner"
import {doLoginRequest, getAccountInfo} from "@/services";

export function LoginForm() {
  const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
    const result = await doLoginRequest(username, password);
    console.log(result)
    if (result.error === "invalidPassword") {
      toast.error("Informations d'authentification invalide")
    }

    if (result.error === "userNotFound") {
      toast.error("Utilisateur introuvable");
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
  return (
    <div className="max-w-md w-full mx-auto rounded p-2 md:p-4 shadow-input bg-white dark:bg-accent">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Connectez vous à votre compte
      </h2>

      <form className="my-4" onSubmit={handleLoginSubmit}>
        <div className="flex flex-col justify-center gap-4">
          <LabelInputContainer>
            <div className={"flex flex-row justify-between items-center"}>
              <Label htmlFor="username-field">Identifiant</Label>
              <p id={"username-warn"} className={"text-red-700 underline font-bold italic"}></p>
            </div>
            <Input id="username-field" placeholder="jeanmi73xx" type="text" autoComplete={"username"}/>
          </LabelInputContainer>
          <LabelInputContainer>
            <div className={"flex flex-row justify-between items-center"}>
              <Label htmlFor="password-field">Mot de passe</Label>
              <p id={"password-warn"} className={"text-red-700 underline font-bold italic"}></p>
            </div>
            <Input id="password-field" placeholder="••••••••" type="password" autoComplete={"current-password"} />
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br relative group/btn from-primary to-accent w-full text-gray-800 dark:text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Connexion &rarr;
            <BottomGradient />
          </button>
        </div>
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
