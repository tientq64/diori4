import basicSsl from '@vitejs/plugin-basic-ssl'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import htmlConfig from 'vite-plugin-html-config'
import { VitePWA } from 'vite-plugin-pwa'
import pkg from './package.json'

export default defineConfig({
	server: {
		host: '0.0.0.0',
		port: 5500
	},
	plugins: [
		htmlConfig({
			favicon: './src/assets/images/book.png',
			metas: [
				{
					name: 'description',
					content: pkg.description
				},
				{
					name: 'keywords',
					content: pkg.keywords.join(', ')
				},
				{
					name: 'author',
					content: pkg.author.name
				},
				{
					name: 'theme_color',
					content: '#1212f2'
				}
			]
		}),
		basicSsl({
			name: 'diori',
			certDir: './local/cert'
		}),
		VitePWA({
			manifest: {
				name: 'Diori 4',
				short_name: 'Diori 4',
				description: pkg.description,
				theme_color: '#121212',
				icons: [
					{
						src: './src/assets/images/book-512.png',
						sizes: '512x512',
						type: 'image/png'
					}
				]
			},
			registerType: 'autoUpdate',
			injectRegister: 'auto',
			devOptions: {
				enabled: true,
				type: 'module'
			}
		}),
		react()
	]
})
