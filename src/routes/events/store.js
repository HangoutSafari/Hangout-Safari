import { writable } from "svelte/store";
export const shouldShowAllEvents = writable(true);
export const lastClickedCategoryId = writable(0);