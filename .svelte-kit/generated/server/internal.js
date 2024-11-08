
import root from '../root.js';
import { set_building, set_prerendering } from '__sveltekit/environment';
import { set_assets } from '__sveltekit/paths';
import { set_manifest, set_read_implementation } from '__sveltekit/server';
import { set_private_env, set_public_env, set_safe_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';

export const options = {
	app_dir: "_app",
	app_template_contains_nonce: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<link rel=\"icon\" href=\"" + assets + "/logo.svg\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\t\t" + head + "\n\t\t<!-- HTML Meta Tags -->\n<title>Demin Ivan Developer</title>\n<meta name=\"description\" content=\"Разработчик веб, мобильных и десктопных приложений. Full-stack web developer\">\n\n<!-- Facebook Meta Tags -->\n<meta property=\"og:url\" content=\"https://portfolio-5339a.web.app/\">\n<meta property=\"og:type\" content=\"website\">\n<meta property=\"og:title\" content=\"Demin Ivan Developer\">\n<meta property=\"og:description\" content=\"Разработчик веб, мобильных и десктопных приложений. Full-stack web developer\">\n<meta property=\"og:image\" content=\"https://opengraph.b-cdn.net/production/images/7d0d89b9-7558-42ef-8b6d-214637af60d4.svg?token=wYi_iupabzE1Ak_HQdZwo4S9JpIqruETgB2Y4G_eBXU&height=332&width=343&expires=33266798233\">\n\n<!-- Twitter Meta Tags -->\n<meta name=\"twitter:card\" content=\"summary_large_image\">\n<meta property=\"twitter:domain\" content=\"portfolio-5339a.web.app\">\n<meta property=\"twitter:url\" content=\"https://portfolio-5339a.web.app/\">\n<meta name=\"twitter:title\" content=\"Demin Ivan Developer\">\n<meta name=\"twitter:description\" content=\"Разработчик веб, мобильных и десктопных приложений. Full-stack web developer\">\n<meta name=\"twitter:image\" content=\"https://opengraph.b-cdn.net/production/images/7d0d89b9-7558-42ef-8b6d-214637af60d4.svg?token=wYi_iupabzE1Ak_HQdZwo4S9JpIqruETgB2Y4G_eBXU&height=332&width=343&expires=33266798233\">\n\n<!-- Meta Tags Generated via https://www.opengraph.xyz -->\n <!-- Yandex.Metrika counter -->\n<script type=\"text/javascript\" >\n\t(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};\n\tm[i].l=1*new Date();\n\tfor (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}\n\tk=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})\n\t(window, document, \"script\", \"https://mc.yandex.ru/metrika/tag.js\", \"ym\");\n \n\tym(98859903, \"init\", {\n\t\t clickmap:true,\n\t\t trackLinks:true,\n\t\t accurateTrackBounce:true\n\t});\n </script>\n <noscript><div><img src=\"https://mc.yandex.ru/watch/98859903\" style=\"position:absolute; left:-9999px;\" alt=\"\" /></div></noscript>\n <!-- /Yandex.Metrika counter -->\n\t</head>\n\t<body data-sveltekit-preload-data=\"hover\">\n\t\t<script>\n\t\t\t\tdocument.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {\n            anchor.addEventListener('click',  (e) => {\n                e.preventDefault();\n                document.querySelector((this).getAttribute('href')).scrollIntoView({\n                    behavior: 'smooth'\n                });\n            });\n        });\n\t\t</script>\n\t\t<div style=\"display: contents\">" + body + "</div>\n\t</body>\n</html>\n",
		error: ({ status, message }) => "<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\t--bg: white;\n\t\t\t\t--fg: #222;\n\t\t\t\t--divider: #ccc;\n\t\t\t\tbackground: var(--bg);\n\t\t\t\tcolor: var(--fg);\n\t\t\t\tfont-family:\n\t\t\t\t\tsystem-ui,\n\t\t\t\t\t-apple-system,\n\t\t\t\t\tBlinkMacSystemFont,\n\t\t\t\t\t'Segoe UI',\n\t\t\t\t\tRoboto,\n\t\t\t\t\tOxygen,\n\t\t\t\t\tUbuntu,\n\t\t\t\t\tCantarell,\n\t\t\t\t\t'Open Sans',\n\t\t\t\t\t'Helvetica Neue',\n\t\t\t\t\tsans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid var(--divider);\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t@media (prefers-color-scheme: dark) {\n\t\t\t\tbody {\n\t\t\t\t\t--bg: #222;\n\t\t\t\t\t--fg: #ddd;\n\t\t\t\t\t--divider: #666;\n\t\t\t\t}\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	},
	version_hash: "br1w6p"
};

export async function get_hooks() {
	return {
		
		
	};
}

export { set_assets, set_building, set_manifest, set_prerendering, set_private_env, set_public_env, set_read_implementation, set_safe_public_env };
