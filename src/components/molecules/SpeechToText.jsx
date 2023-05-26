import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { Button } from '../atoms/Button';
import { TbMicrophone } from 'react-icons/tb';

export const SpeechToText = ({ request, onChangeTranscript }) => {
	const { transcript, resetTranscript, listening, browserSupportsSpeechRecognition, isMicrophoneAvailable } =
		useSpeechRecognition();

	const startListening = () =>
		SpeechRecognition.startListening({ interimResults: true, language: 'id', continuous: true });

	if (!browserSupportsSpeechRecognition) {
		return <span>Browser doesn't support speech recognition.</span>;
	}

	if (!isMicrophoneAvailable) {
		return <span>Microphone is not available.</span>;
	}

	onChangeTranscript(transcript);

	return (
		<div className="flex flex-col items-center justify-center w-full space-y-3">
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

			<div className="text-center text-yellow-500">
				{listening ? 'Mic menyala, bicara sekarang' : 'Mic mati, tekan tombol di atas untuk bicara'}
			</div>

			{transcript && (
				<>
					<div className="flex flex-col items-center w-full space-y-3 text-center">
						{transcript && (
							<>
								<div>Transcript :</div>
								<div className="w-full p-3 border-2 border-gray-200 rounded-md">
									{transcript
										?.toLowerCase()
										.split(' ')
										.map((word, index) => {
											const isCorrect = request.split(' ').includes(word);
											return (
												<span key={index} className={isCorrect ? 'text-green-500' : 'text-red-500'}>
													{word}{' '}
												</span>
											);
										})}
								</div>
								<Button onClick={resetTranscript}>Reset</Button>
							</>
						)}
					</div>
				</>
			)}
		</div>
	);
};
