import clsx from 'clsx';
import React from 'react';

export const ButtonIcon = ({ className, children, icon, onClick, disabled }) => {
	return (
		<button
			className={clsx(
				['transition-all origin-center transform active:scale-100 hover:scale-105 outline-none'],
				className || 'w-32',
				disabled && 'opacity-50'
			)}
			onClick={onClick}
			disabled={disabled}
		>
			{icon && <img src={icon} alt="" />}
			{children}
		</button>
	);
};

ButtonIcon.defaultProps = {
	className: '',
	onClick: () => {},
};
