import React, { useEffect, useState } from 'react';
import { ButtonIcon } from '../atoms';
import clsx from 'clsx';
import { Fade } from '@/transitions/Fade/Fade';
import { TbCapture } from 'react-icons/tb';
import { Tooltip } from 'react-tooltip';

export const ButtonFullScreen = () => {
	const [isFullScreen, setIsFullScreen] = useState(false);

	const toggleFullScreen = () => {
		if (!document.fullscreenElement) {
			setIsFullScreen(true);
			document.documentElement.requestFullscreen();
		} else if (document.exitFullscreen) {
			setIsFullScreen(false);
			document.exitFullscreen();
		}
	};

	return (
		<Fade className="flex items-center justify-center">
			<ButtonIcon
				id="buttonFullScreen"
				className={clsx(
					'flex items-center justify-center',
					'w-10 md:w-11 lg:w-12 h-10 md:h-11 lg:h-12 text-sm text-[1.8em]',
					'text-white rounded-lg cursor-pointer bg-app-carmine-pink'
				)}
				onClick={toggleFullScreen}
			>
				<TbCapture />
			</ButtonIcon>
			<Tooltip anchorSelect="#buttonFullScreen" place="top">
				Layar Penuh
			</Tooltip>
		</Fade>
	);
};
