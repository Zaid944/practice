/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.toml`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	async fetch(request, env, ctx): Promise<Response> {
		// console.log(request.body);
		// console.log(request.method);
		// console.log(request.headers);
		// console.log(request.url);
		// var uri = request.url.replace(/ii/);
		// if (request.method == 'GET') {
		// 	return Response.json({
		// 		data: 'get request',
		// 	});
		// }
		return Response.json({ message: 'no get request' });
	},
} satisfies ExportedHandler<Env>;
