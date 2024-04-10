import {getLocalStorageValue} from "@/services/LocalStorageService";


export async function getAllThreads() {
    const jwt = getLocalStorageValue('jwt')

    const response = await fetch('https://localhost:3333/threads/all', { // replace with your API endpoint
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`
      }
    });

    return await response.json();
}