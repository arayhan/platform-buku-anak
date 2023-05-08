import { BOOK_DATA } from '@/data/bookData';
import React, { useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';

import voiceOverSource from '@/audios/voice-over.wav';

const Read = () => {
	const voiceOverRef = useRef(null);

	const [isBacksoundReady, setIsBacksoundReady] = useState(false);
	const [playing, setPlaying] = useState(false);

	const onBacksoundReady = () => {
		voiceOverRef.current.volume = 0.5;
		setIsBacksoundReady(true);
	};

	return (
		<div className="overflow-hidden rounded-lg shadow-xl">
			<audio
				ref={voiceOverRef}
				src={voiceOverSource}
				autoPlay
				loop
				onLoadedData={onBacksoundReady}
				onPlay={() => setPlaying(true)}
			/>

			<HTMLFlipBook width={1036.5} height={518.25}>
				{BOOK_DATA.pages.map((page) => (
					<div key={page.number}>
						<img src={page.image} alt="" />
					</div>
				))}
			</HTMLFlipBook>
		</div>
	);
};

export default Read;
