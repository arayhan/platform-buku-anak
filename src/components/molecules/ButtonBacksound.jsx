import { ButtonIcon } from '@/components/atoms';
import clsx from 'clsx';
import React, { useRef, useState } from 'react';

import backsoundURL from '@/audios/curious_kiddo-david.mp3';

export const ButtonBacksound = () => {
	const backsoundRef = useRef(null);

	const [isBacksoundReady, setIsBacksoundReady] = useState(false);
	const [playing, setPlaying] = useState(false);

	const IS_MUSIC_ON = playing && isBacksoundReady;

	const toggleBacksound = () => {
		if (backsoundRef.current?.paused) {
			backsoundRef.current?.play();
			setPlaying(true);
		} else {
			backsoundRef.current.pause();
			setPlaying(false);
		}
	};

	const onBacksoundReady = () => {
		backsoundRef.current.volume = 0.5;
		setIsBacksoundReady(true);
	};

	return (
		<div className="flex items-center justify-center">
			<audio
				ref={backsoundRef}
				src={backsoundURL}
				autoPlay
				loop
				onLoadedData={onBacksoundReady}
				onPlay={() => setPlaying(true)}
			/>

			<div className="text-sm text-center">
				<ButtonIcon
					icon={require('@/images/symbol/music.png')}
					className={clsx('w-12', !IS_MUSIC_ON && 'opacity-50')}
					onClick={toggleBacksound}
				/>
				<div>{IS_MUSIC_ON ? 'ON' : 'OFF'}</div>
			</div>
		</div>
	);
};
