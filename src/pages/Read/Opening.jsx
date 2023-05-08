import React, { useRef, useState } from 'react';
import openingVoiceSource from '@/audios/voice-over.wav';

export const Opening = ({ onFinished }) => {
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

			<div className="relative max-w-[650px]">
				<img className="z-0 mx-auto rounded-lg shadow-xl" src={require('@/images/cover.jpg')} alt="" />
			</div>
		</div>
	);
};
