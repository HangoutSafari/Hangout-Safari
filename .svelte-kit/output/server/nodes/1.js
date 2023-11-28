

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.5a69e1fe.js","_app/immutable/chunks/index.f1d1c83d.js","_app/immutable/chunks/stores.2c4f1c10.js","_app/immutable/chunks/singletons.35cb6aec.js"];
export const stylesheets = [];
export const fonts = [];
