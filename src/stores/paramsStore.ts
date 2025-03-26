import { writable } from "svelte/store";

export interface Word {
    entry: string;
    out: string;
    speak: string;
}

export interface MessageStore {
    words: Word[];
}

export type MessageStoreType = null | string | MessageStore;

export const userLangStore = writable('pt-br');
export const learningLangStore = writable('en');
export const numOfWordsStore = writable(5);
export const categoryStore = writable('any');
export const messageStore = writable<MessageStoreType>(null); 