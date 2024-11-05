export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.zwEx84c6.js","app":"_app/immutable/entry/app.C-xyNZai.js","imports":["_app/immutable/entry/start.zwEx84c6.js","_app/immutable/chunks/entry.CYmF3qCX.js","_app/immutable/chunks/runtime.DmIzA1C0.js","_app/immutable/entry/app.C-xyNZai.js","_app/immutable/chunks/runtime.DmIzA1C0.js","_app/immutable/chunks/disclose-version.DO2YKsTc.js","_app/immutable/chunks/props.8ybBnxoE.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
