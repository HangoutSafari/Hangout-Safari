

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.8305f0b8.js","_app/immutable/chunks/index.f044562a.js","_app/immutable/chunks/stores.69eef777.js","_app/immutable/chunks/singletons.ce2a1206.js"];
export const stylesheets = [];
export const fonts = [];
