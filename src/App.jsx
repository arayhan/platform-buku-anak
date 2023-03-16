import { ButtonIcon } from '@/components/atoms';
import clsx from 'clsx';
import React, { useRef, useState } from 'react';

import backsoundURL from '@/audios/bensound-cutesttoys.mp3';
import HTMLFlipBook from 'react-pageflip';
import { MainMenu } from './pages';

function App() {
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

	const onStartReading = () => {
		console.log('START');
	};

	return (
		<div className="h-screen max-h-screen overflow-hidden">
			<img
				className="absolute top-0 left-0 object-cover w-full h-full opacity-50 -z-10"
				src={require('@/images/background.jpg')}
				alt=""
			/>

			<div className="container relative flex flex-col items-center justify-center h-full max-w-screen-xl gap-12 mx-auto top-5">
				<HTMLFlipBook width={1024} height={650}>
					<div>
						<MainMenu onClickStart={onStartReading} />
					</div>
					<div>Page 2</div>
					<div>Page 3</div>
					<div>Page 4</div>
				</HTMLFlipBook>
			</div>

			<div className="absolute bottom-5 right-8">
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
			</div>
		</div>
	);
}

export default App;
