import { defineConfig } from 'vite'
import htmlConfig from 'vite-plugin-html-config'
import react from '@vitejs/plugin-react'
import pkg from './package.json'

export default defineConfig({
	server: {
		port: 5500
	},
	plugins: [
		htmlConfig({
			favicon: '/src/assets/images/book.png',
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
				}
			]
		}),
		react()
	]
})
