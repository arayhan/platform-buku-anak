import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { Button } from '../atoms/Button';
import { TbMicrophone } from 'react-icons/tb';
import { useAppStore } from '@/store/store';

export const SpeechToText = ({ request, onChangeTranscript }) => {
	const { currentAnswer } = useAppStore();
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
				className="bg-app-blue-sapphire-500 py-4"
				onTouchStart={startListening}
				onMouseDown={startListening}
				onTouchEnd={SpeechRecognition.stopListening}
				onMouseUp={SpeechRecognition.stopListening}
				contextMenu={(event) => event.preventDefault()}
			>
				<TbMicrophone className="text-white" size={20} color="#fff" />
			</Button>

			<div className="text-center text-yellow-500">
				{listening ? 'Mic menyala, bicara sekarang' : 'Mic mati, tekan tombol di atas untuk bicara'}
			</div>

			{transcript && (
				<>
					<div className="flex flex-col items-center w-full space-y-2 text-center">
						{transcript && (
							<>
								<div>Jawabanmu :</div>
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

			{currentAnswer && typeof currentAnswer === 'string' && (
				<>
					<div>Jawaban Sebelumnya :</div>
					<div className="w-full p-3 border-2 border-gray-200 rounded-md">
						{currentAnswer
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
				</>
			)}
		</div>
	);
};
