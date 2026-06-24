import { readFileSync } from 'fs'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import adapter from '@sveltejs/adapter-static'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	compilerOptions: {
		runes: true
	},
	kit: {
		output: {
			preloadStrategy: 'preload-mjs'
		},
		adapter: adapter({
			pages: 'htdocs',
			assets: 'htdocs',
			fallback: '200.html',
			strict: false,
			precompress: false
		}),
		alias: {
			$styles: './src/lib/styles/',
			$routes: './src/routes.js',
			$stammdaten: './src/lib/stammdaten.js'
		}
	}
}

export default config
