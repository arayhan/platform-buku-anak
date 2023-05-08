import React from 'react';
import { ButtonIcon } from '../atoms';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';

export const ButtonGoHome = () => {
	const navigate = useNavigate();

	return (
		<div className="flex items-center justify-center">
			<div className="text-sm text-center">
				<ButtonIcon icon={require('@/images/symbol/home.png')} className={clsx('w-12')} onClick={() => navigate('/')} />
			</div>
		</div>
	);
};
