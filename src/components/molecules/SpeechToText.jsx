import React, { useEffect } from 'react';
// import { createSpeechlySpeechRecognition } from '@speechly/speech-recognition-polyfill';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { Button } from '../atoms/Button';
import { TbMicrophone } from 'react-icons/tb';

export const SpeechToText = ({ request, onChangeTranscript }) => {
	const { transcript, resetTranscript, listening, browserSupportsSpeechRecognition, isMicrophoneAvailable } =
		useSpeechRecognition();

	const startListening = () =>
		SpeechRecognition.startListening({ interimResults: true, language: 'id', continuous: true });

	useEffect(() => {
		onChangeTranscript(transcript);
	}, [onChangeTranscript, transcript]);

	if (!browserSupportsSpeechRecognition) {
		return <span>Browser doesn't support speech recognition.</span>;
	}

	if (!isMicrophoneAvailable) {
		return <span>Microphone is not available.</span>;
	}

	return (
		<div className="flex flex-col items-center justify-center w-full space-y-3">
			<div className="text-yellow-500">
				{listening ? 'Mic menyala, bicara sekarang' : 'Mic mati, tekan tombol di bawah untuk bicara'}
			</div>
			<Button
				className="bg-app-blue-sapphire-500"
				onTouchStart={startListening}
				onMouseDown={startListening}
				onTouchEnd={SpeechRecognition.stopListening}
				onMouseUp={SpeechRecognition.stopListening}
			>
				<TbMicrophone className="text-white" size={20} color="#fff" />
				<div>Tahan untuk bicara</div>
			</Button>
			{transcript && (
				<>
					<div className="flex flex-col items-center w-full space-y-3 text-center">
						<div>Transcript :</div>
						<div className="w-full border-gray-200 rounded-md">
							{transcript.split(' ').map((word, index) => {
								const isCorrect = request.split(' ').includes(word);
								return (
									<span key={index} className={isCorrect ? 'text-green-500' : 'text-red-500'}>
										{word}{' '}
									</span>
								);
							})}
						</div>
						<Button onClick={resetTranscript}>Reset</Button>
					</div>
				</>
			)}
		</div>
	);
};
