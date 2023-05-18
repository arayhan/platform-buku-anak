import React from 'react';
import { ButtonIcon } from '../atoms';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import { Fade } from '@/transitions/Fade/Fade';
import { Tooltip } from 'react-tooltip';

export const ButtonGoHome = () => {
	const navigate = useNavigate();

	return (
		<Fade className="flex items-center justify-center">
			<div id="buttonGoHome" className="text-sm text-center">
				<ButtonIcon
					icon={require('@/images/symbol/home.png')}
					className={clsx('w-10 md:w-11 lg:w-12')}
					onClick={() => navigate('/')}
				/>
			</div>
			<Tooltip anchorSelect="#buttonGoHome" place="top">
				Beranda
			</Tooltip>
		</Fade>
	);
};
