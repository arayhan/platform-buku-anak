import { Fade } from '@/transitions/Fade/Fade';
import clsx from 'clsx';
import React from 'react';

export const Button = ({ label, size, ...props }) => {
	return (
		<Fade>
			<button
				className={clsx([
					'text-white transition-all origin-center transform cursor-pointer bg-app-carmine-pink active:scale-100 hover:scale-105',
					size === 'sm' && 'px-5 py-2 text-sm rounded-sm',
					size === 'md' && 'px-5 py-2 text-base rounded-md',
					size === 'lg' && 'px-8 py-3 text-lg rounded-md',
					size === 'xl' && 'px-5 py-2 text-xl rounded-md',
				])}
				{...props}
			>
				{label || 'Button'}
			</button>
		</Fade>
	);
};

Button.defaultProps = {
	size: 'md',
};
