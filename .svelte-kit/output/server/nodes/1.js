

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.aaf86124.js","_app/immutable/chunks/index.f1d1c83d.js","_app/immutable/chunks/stores.9f470263.js","_app/immutable/chunks/singletons.c6bb41e1.js"];
export const stylesheets = [];
export const fonts = [];
