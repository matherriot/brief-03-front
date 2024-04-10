"use client"
// Get jwt from indexedDB

import {getLocalStorageValue, setLocalStorageValue} from "@/services/LocalStorageService";
import {IUserData} from "@/types";
import {IRegisterData} from "@/types/RegisterData";

export let UserData: IUserData | null;
export function getUserData() {
  return UserData;
}

export function disconnect() {
  window.localStorage.clear();
  UserData = null;
  window.location.reload()
}


// Function to fetch user data
async function fetchUserData(jwt: string): Promise<IUserData> {
  const response = await fetch('http://localhost:3333/auth/me', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${jwt}`
    }
  });
  return await response.json();
}

export async function getAccountInfo() {
  console.log('do get')
  const jwt = getLocalStorageValue('jwt');
  if (!jwt) {
    console.log('JWT not found')
    return false;
  }
  const userData = await fetchUserData(jwt);
  // TODO If invalid jwt then delete jwt from local storage
  if (userData.error) {
    window.localStorage.clear()
    return false
  }
  UserData = userData
  setLocalStorageValue('username', userData.username)
  setLocalStorageValue('displayName', userData.displayName)
  setLocalStorageValue('firstName', userData.firstName)
  setLocalStorageValue('lastName', userData.lastName)
  return true
}

export async function doLoginRequest(username: string, password: string) {
  const body = JSON.stringify({
    username: `${username}`,
    password: `${password}`
  })
  console.log(body)
  const response = await fetch("http://localhost:3333/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: body
  });
  return await response.json()
}

export async function doRegisterRequest(firstName: string, lastName: string, username: string, displayName: string, password: string, gdpr: boolean): Promise<IRegisterData> {
  const body = JSON.stringify({
    username: `${username}`,
    displayName: `${displayName}`,
    password: `${password}`,
    firstName: `${firstName}`,
    lastName: `${lastName}`,
    gdpr: gdpr
  })
  console.log(body)
  const response = await fetch("http://localhost:3333/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: body
  });
  return await response.json()
}