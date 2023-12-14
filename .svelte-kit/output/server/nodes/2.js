

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/events/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.b4f5abbc.js","_app/immutable/chunks/index.1beed945.js"];
export const stylesheets = [];
export const fonts = [];
