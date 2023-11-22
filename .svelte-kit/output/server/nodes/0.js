

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.e922c747.js","_app/immutable/chunks/index.68cfbe9d.js"];
export const stylesheets = ["_app/immutable/assets/0.9135c4e3.css"];
export const fonts = [];
