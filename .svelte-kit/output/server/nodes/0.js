

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.1257631c.js","_app/immutable/chunks/index.f1d1c83d.js","_app/immutable/chunks/stores.63e6fe48.js","_app/immutable/chunks/singletons.db365ca3.js"];
export const stylesheets = ["_app/immutable/assets/0.1e8bc3ce.css","_app/immutable/assets/navbar.de97d7d1.css"];
export const fonts = [];
