import clsx from 'clsx';
import React from 'react';

export const ButtonIcon = ({ className, icon }) => {
	return (
		<button
			className={clsx(['transition-all origin-center transform active:scale-100 hover:scale-105'], className || 'w-32')}
		>
			{icon && <img src={icon} alt="" />}
		</button>
	);
};

ButtonIcon.defaultProps = {
	className: '',
};
