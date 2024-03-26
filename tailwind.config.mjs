const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				dark: {
					DEFAULT: '#22272E',
					100: '#282C31',
				},
				soto: {
					100: '#ABB581',
					200: '#5D6833',
					300: '#6F90B5',
					400: '#ADBAC7',
					500: '#303030',
				},
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						a: {
							color: theme('colors.blue.500'),
							'&:hover': {
								color: theme('colors.blue.400'),
							},
						},
					},
				},
			}),
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
