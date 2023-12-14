

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.5faba114.js","_app/immutable/chunks/index.1beed945.js","_app/immutable/chunks/stores.bdcd7dfd.js","_app/immutable/chunks/singletons.489fad4f.js","_app/immutable/chunks/index.a8d8cf0e.js"];
export const stylesheets = ["_app/immutable/assets/0.ccd6888a.css","_app/immutable/assets/navbar.b381e849.css"];
export const fonts = [];
