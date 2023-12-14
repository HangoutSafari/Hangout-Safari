

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.a690501c.js","_app/immutable/chunks/index.1beed945.js","_app/immutable/chunks/stores.bdcd7dfd.js","_app/immutable/chunks/singletons.489fad4f.js","_app/immutable/chunks/index.a8d8cf0e.js"];
export const stylesheets = [];
export const fonts = [];
