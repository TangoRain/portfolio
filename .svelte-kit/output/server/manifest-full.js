export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","logo.svg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.DfmchwvQ.js","app":"_app/immutable/entry/app.6s8_ynOU.js","imports":["_app/immutable/entry/start.DfmchwvQ.js","_app/immutable/chunks/entry.BnsVR8k0.js","_app/immutable/chunks/runtime.CaJm-uie.js","_app/immutable/entry/app.6s8_ynOU.js","_app/immutable/chunks/runtime.CaJm-uie.js","_app/immutable/chunks/disclose-version.DgpG3m5-.js","_app/immutable/chunks/if.ByKLRAnP.js","_app/immutable/chunks/props.xFLg9kCF.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
