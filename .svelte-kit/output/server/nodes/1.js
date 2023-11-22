

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.1bd38d21.js","_app/immutable/chunks/index.676b468f.js","_app/immutable/chunks/singletons.874d36ae.js"];
export const stylesheets = [];
export const fonts = [];
