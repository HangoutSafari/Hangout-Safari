

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.ff36e594.js","_app/immutable/chunks/index.f1d1c83d.js","_app/immutable/chunks/stores.63e6fe48.js","_app/immutable/chunks/singletons.db365ca3.js"];
export const stylesheets = [];
export const fonts = [];
