/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Merriweather', 'Georgia', 'Times New Roman', 'serif'],
				mono: ['Geist Mono', 'monospace']
			},
			colors: {
				azure: {
					DEFAULT: '#0b3c62',
					light: '#8CBEE3',
				},
			},
		}
	},
	plugins: []
};
