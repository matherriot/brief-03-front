'use client'

/**
 * Retrieves the value associated with the given key from the Local Storage.
 *
 * @param {string} key - The key to look for in the Local Storage.
 * @return {string | null} - The value associated with the key, or null if the key is not found.
 */
export function getLocalStorageValue(key: string): string | null {
  return localStorage.getItem(key);
}

/**
 * Sets the value in the local storage for the given key.
 *
 * @param {string} key - The key for the local storage.
 * @param {string | null} value - The value to be set in the local storage.
 * @return {void}
 */
export function setLocalStorageValue(key: string, value: string | null): void {
  if (!value) return;
  localStorage.setItem(key, value);
}
