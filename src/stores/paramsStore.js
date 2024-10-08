import { writable } from "svelte/store";

export const learningLangStore = writable('en');
export const numOfWordsStore = writable(5);
export const categoryStore = writable('any');


