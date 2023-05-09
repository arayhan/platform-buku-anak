import React, { useEffect, useState } from 'react';
import { ButtonIcon } from '../atoms';
import clsx from 'clsx';
import { Fade } from '@/transitions/Fade/Fade';

export const ButtonReadingMode = () => {
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
			<div className="font-semibold text-center ">
				<div className="flex items-center gap-4">
					<ButtonIcon icon={require('@/images/symbol/buku.png')} className={clsx('w-12')} onClick={toggleFullScreen} />
					<div className="text-app-blue-sapphire-500">MODE BACA : {isFullScreen ? 'ON' : 'OFF'}</div>
				</div>
			</div>
		</Fade>
	);
};
