import { Fade } from '@/transitions/Fade/Fade';
import React from 'react';

export const Button = ({ label, ...props }) => {
	return (
		<Fade>
			<button
				className="px-6 py-3 text-lg text-white transition-all origin-center transform rounded-md cursor-pointer bg-app-carmine-pink active:scale-100 hover:scale-105"
				{...props}
			>
				{label || 'Button'}
			</button>
		</Fade>
	);
};
