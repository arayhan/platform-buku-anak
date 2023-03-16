import clsx from 'clsx';
import React from 'react';

export const ButtonImage = ({ className, image }) => {
	return (
		<button
			className={clsx(['transition-all origin-center transform active:scale-100 hover:scale-105'], className || 'w-32')}
		>
			<img src={image} alt="" />
		</button>
	);
};

ButtonImage.defaultProps = {
	className: '',
};
