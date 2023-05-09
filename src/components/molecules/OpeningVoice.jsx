import React, { useRef } from 'react';
import openingVoiceSource from '@/audios/opening.wav';

export const OpeningVoice = ({ onFinished }) => {
	const openingVoiceRef = useRef(null);

	const onOpeningVoiceReady = () => {
		openingVoiceRef.current.volume = 0.5;
	};

	return (
		<div>
			<audio
				ref={openingVoiceRef}
				src={openingVoiceSource}
				autoPlay
				onEnded={onFinished}
				onLoadedData={onOpeningVoiceReady}
			/>
		</div>
	);
};
