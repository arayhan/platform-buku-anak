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
				primary: ['"Fredoka"', 'sans-serif'],
			},
			colors: {
				app: {
					'blue-sapphire': {
						100: '#d0dde6',
						200: '#a2bbcd',
						300: '#7398b5',
						400: '#45769c',
						500: '#165483',
						DEFAULT: '#165483',
						600: '#124369',
						700: '#0d324f',
						800: '#092234',
						900: '#04111a',
					},
					diamond: {
						100: '#f3fbfe',
						200: '#e8f8fc',
						300: '#dcf4fb',
						400: '#d1f1f9',
						500: '#c5edf8',
						DEFAULT: '#c5edf8',
						600: '#9ebec6',
						700: '#768e95',
						800: '#4f5f63',
						900: '#272f32',
					},
					coral: {
						100: '#ffe4dc',
						200: '#ffc9b8',
						300: '#ffae95',
						400: '#ff9371',
						500: '#ff784e',
						DEFAULT: '#ff784e',
						600: '#cc603e',
						700: '#99482f',
						800: '#66301f',
						900: '#331810',
					},
					'carmine-pink': '#E34F4D',
					'bright-navy-blue': '#1f79c8',
					'pearl-aqua': '#7DC9C7',
					'mellow-apricot': '#F9B77D',
					'cadmium-purple': '#B90429',
					'blue-jeans': '#64B6EE',
					verdigris: '#52B3B1',
					mandarin: '#EF7E3A',
				},
			},
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/line-clamp'),
	],
};
