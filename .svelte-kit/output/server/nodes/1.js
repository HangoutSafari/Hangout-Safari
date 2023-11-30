

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.70a84ebb.js","_app/immutable/chunks/index.4a4bc412.js","_app/immutable/chunks/stores.5cfd4997.js","_app/immutable/chunks/singletons.c16db320.js"];
export const stylesheets = [];
export const fonts = [];
