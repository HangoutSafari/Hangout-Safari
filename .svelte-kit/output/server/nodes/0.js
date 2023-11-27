

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.5c5f60f8.js","_app/immutable/chunks/index.f044562a.js","_app/immutable/chunks/stores.69eef777.js","_app/immutable/chunks/singletons.ce2a1206.js"];
export const stylesheets = ["_app/immutable/assets/0.42894f5c.css","_app/immutable/assets/navbar.de97d7d1.css"];
export const fonts = [];
