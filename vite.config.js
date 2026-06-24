import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import autoImport from 'sveltekit-autoimport'

export default defineConfig({
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern'
			}
		}
	},
	plugins: [
		autoImport({
			configFile: false,
			components: [
				{
					name: './src/lib/boilerplate/components',
					flat: true
				},
				{
					name: './src/lib/components',
					flat: true
				}
			],
			include: ['./src/**/*.svelte']
		}),
		sveltekit()
	],
	server: {
		port: 3000,
		proxy: {
			'/api': {
				changeOrigin: true,
				target: 'https://api.klickrhein.de/v5dev',
				rewrite: path => path.replace(/^\/api/, '')
			}
		}
	}
})
