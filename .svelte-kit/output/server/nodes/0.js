import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.DkyNmaXE.js","_app/immutable/chunks/disclose-version.DO2YKsTc.js","_app/immutable/chunks/runtime.DmIzA1C0.js","_app/immutable/chunks/index.Cc0kzOuV.js","_app/immutable/chunks/lifecycle.BrAqMedO.js","_app/immutable/chunks/props.8ybBnxoE.js"];
export const stylesheets = ["_app/immutable/assets/0.M6tLu3vn.css"];
export const fonts = [];
