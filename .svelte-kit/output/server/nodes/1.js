

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.56fd24fb.js","_app/immutable/chunks/index.68cfbe9d.js","_app/immutable/chunks/singletons.1146ff49.js"];
export const stylesheets = [];
export const fonts = [];
