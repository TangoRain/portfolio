import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.BvzEWwA5.js","_app/immutable/chunks/disclose-version.DgpG3m5-.js","_app/immutable/chunks/runtime.CaJm-uie.js","_app/immutable/chunks/index.BnCl-ws-.js","_app/immutable/chunks/lifecycle.DeN6Z2CO.js","_app/immutable/chunks/props.xFLg9kCF.js","_app/immutable/chunks/if.ByKLRAnP.js"];
export const stylesheets = ["_app/immutable/assets/0.S49rtIYx.css"];
export const fonts = [];
