

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.1dbe36d8.js","_app/immutable/chunks/index.f1d1c83d.js","_app/immutable/chunks/stores.2c4f1c10.js","_app/immutable/chunks/singletons.35cb6aec.js"];
export const stylesheets = ["_app/immutable/assets/0.f0699674.css","_app/immutable/assets/navbar.de97d7d1.css"];
export const fonts = [];
