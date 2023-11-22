

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.8aad479f.js","_app/immutable/chunks/index.2921e8e9.js","_app/immutable/chunks/stores.209088dc.js","_app/immutable/chunks/singletons.b7a9429b.js"];
export const stylesheets = ["_app/immutable/assets/0.a047bdc8.css","_app/immutable/assets/navbar.b5206811.css"];
export const fonts = [];
