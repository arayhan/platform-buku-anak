import { ButtonIcon } from '@/components/atoms';
import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';

import backsoundURL from '@/audios/bensound-cutesttoys.mp3';

export const MainMenu = () => {
	const backsoundRef = useRef(null);

	const [isBacksoundReady, setIsBacksoundReady] = useState(false);
	const [playing, setPlaying] = useState(false);

	const toggleBacksound = () => {
		if (backsoundRef.current?.paused) {
			backsoundRef.current?.play();
			setPlaying(true);
		} else {
			backsoundRef.current.pause();
			setPlaying(false);
		}
	};

	useEffect(() => {
		if (isBacksoundReady) {
			backsoundRef.current?.play();
		}
	}, [isBacksoundReady]);

	const isMusicOn = playing && isBacksoundReady;

	return (
		<div className="h-screen max-h-screen overflow-hidden">
			<img
				className="absolute top-0 left-0 object-cover w-full h-full opacity-50 -z-10"
				src={require('@/images/background.jpg')}
				alt=""
			/>

			<div className="container relative flex flex-col items-center justify-center h-full max-w-screen-xl gap-12 mx-auto top-5">
				<div className="flex items-center justify-center w-full gap-10 rounded-lg">
					<div className="relative w-full">
						<img className="z-0 mx-auto rounded-lg shadow-xl" src={require('@/images/cover.jpg')} alt="" />
					</div>

					<div className="flex flex-col items-center justify-center w-full gap-10">
						<img className="w-96" src={require('@/images/logo.png')} alt="" />

						<div className="flex items-center justify-center w-full gap-3">
							<ButtonIcon icon={require('@/images/symbol/start.png')} />
						</div>
					</div>
				</div>
			</div>

			<div className="absolute bottom-5 right-8">
				<div className="flex items-center justify-center">
					<audio
						ref={backsoundRef}
						src={backsoundURL}
						autoPlay
						loop
						onLoadedData={() => setIsBacksoundReady(true)}
						onPlay={() => setPlaying(true)}
					/>

					<div className="text-sm text-center">
						<ButtonIcon
							icon={require('@/images/symbol/music.png')}
							className={clsx('w-12', !isMusicOn && 'opacity-50')}
							onClick={toggleBacksound}
						/>
						<div>{isMusicOn ? 'ON' : 'OFF'}</div>
					</div>
				</div>
			</div>
		</div>
	);
};
