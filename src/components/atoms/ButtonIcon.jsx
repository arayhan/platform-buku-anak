import clsx from 'clsx';
import React from 'react';

export const ButtonIcon = ({ className, icon, onClick }) => {
	return (
		<button
			className={clsx(['transition-all origin-center transform active:scale-100 hover:scale-105'], className || 'w-32')}
			onClick={onClick}
		>
			{icon && <img src={icon} alt="" />}
		</button>
	);
};

ButtonIcon.defaultProps = {
	className: '',
	onClick: () => {},
};
