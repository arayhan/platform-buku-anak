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
					'w-8 md:w-9 lg:w-10 h-8 md:h-9 lg:h-10 text-sm text-[1.8em]',
					'text-white rounded-lg cursor-pointer bg-app-carmine-pink'
				)}
				onClick={() => toggleFullScreen(false)}
			>
				<TbCapture size={24} />
			</ButtonIcon>
			<Tooltip anchorSelect="#buttonFullScreen" place="top">
				Layar Penuh
			</Tooltip>
		</Fade>
	);
};
