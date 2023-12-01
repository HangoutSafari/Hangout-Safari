

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.dd6a11e4.js","_app/immutable/chunks/index.4a4bc412.js","_app/immutable/chunks/stores.5cfd4997.js","_app/immutable/chunks/singletons.c16db320.js"];
export const stylesheets = ["_app/immutable/assets/0.a23cf782.css","_app/immutable/assets/navbar.b381e849.css"];
export const fonts = [];
