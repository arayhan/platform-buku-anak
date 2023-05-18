import { Fade } from '@/transitions/Fade/Fade';
import clsx from 'clsx';
import React from 'react';

export const Button = ({ icon, label, size, children, className, ...props }) => {
	return (
		<Fade>
			<button
				className={clsx([
					'flex gap-4 items-center text-white transition-all origin-center transform cursor-pointer bg-app-carmine-pink active:scale-100 hover:scale-105',
					size === 'sm' && 'px-5 py-2 text-sm rounded-sm',
					size === 'md' && 'px-5 py-2 text-base rounded-md',
					size === 'lg' && 'px-8 py-3 text-lg rounded-md',
					size === 'xl' && 'px-8 py-4 text-xl rounded-md',
					className,
				])}
				{...props}
			>
				{icon && <img className={clsx(size === 'md' && 'w-8')} src={icon} alt="" />}
				{children || label || 'Button'}
			</button>
		</Fade>
	);
};

Button.defaultProps = {
	size: 'md',
};
