import React from 'react';
import { ButtonIcon } from '../atoms';
import clsx from 'clsx';
import { Fade } from '@/transitions/Fade/Fade';
import { TbCapture } from 'react-icons/tb';
import { Tooltip } from 'react-tooltip';
import { toggleFullScreen } from '@/utils/helpers';

export const ButtonFullScreen = () => {
	return (
		<Fade className="flex items-center justify-center">
			<ButtonIcon
				id="buttonFullScreen"
				className={clsx(
					'flex items-center justify-center',
					'w-10 md:w-11 lg:w-12 h-10 md:h-11 lg:h-12 text-sm text-[1.8em]',
					'text-white rounded-lg cursor-pointer bg-app-carmine-pink'
				)}
				onClick={() => toggleFullScreen(false)}
			>
				<TbCapture />
			</ButtonIcon>
			<Tooltip anchorSelect="#buttonFullScreen" place="top">
				Layar Penuh
			</Tooltip>
		</Fade>
	);
};
