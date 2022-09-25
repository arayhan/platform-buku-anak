/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			container: {
				center: true,
				padding: '1rem',
			},
			fontFamily: {
				primary: ['"Inter"', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
