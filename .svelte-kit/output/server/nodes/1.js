

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.a707edf5.js","_app/immutable/chunks/index.2921e8e9.js","_app/immutable/chunks/stores.209088dc.js","_app/immutable/chunks/singletons.b7a9429b.js"];
export const stylesheets = [];
export const fonts = [];
