import { writable } from "svelte/store";

export const suggestions = writable([]);

export const long = writable(0);

export const lat = writable(0);
