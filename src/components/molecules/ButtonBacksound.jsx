import { ButtonIcon } from '@/components/atoms';
import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

import backsoundURL from '@/audios/curious_kiddo-david.mp3';
import { OpeningVoice } from './OpeningVoice';

export const ButtonBacksound = () => {
	const backsoundRef = useRef(null);
	const location = useLocation();

	const IS_READING = location.pathname === '/book';

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
		backsoundRef.current.volume = 0.25;
		setIsBacksoundReady(true);
	};

	useEffect(() => {
		if (IS_READING) backsoundRef.current.volume = 0.15;
		else backsoundRef.current.volume = 0.25;
	}, [backsoundRef, location, IS_READING]);

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
					className={clsx('w-10 md:w-11 lg:w-12', !IS_MUSIC_ON && 'opacity-50')}
					onClick={toggleBacksound}
				/>
				<div>{IS_MUSIC_ON ? 'ON' : 'OFF'}</div>
			</div>
		</div>
	);
};
