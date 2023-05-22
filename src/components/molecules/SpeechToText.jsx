import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { Button } from '../atoms/Button';
import { TbMicrophone } from 'react-icons/tb';

export const SpeechToText = ({ request, answer }) => {
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

	return (
		<div className="flex flex-col items-center justify-center w-full space-y-3">
			<div className="text-center text-yellow-500">
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
			{(transcript || answer) && (
				<>
					<div className="flex flex-col items-center w-full space-y-3 text-center">
						{transcript && (
							<>
								<div>Transcript :</div>
								<div className="w-full p-3 border-2 border-gray-200 rounded-md">
									{transcript
										.toLowerCase()
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

					{answer && (
						<>
							<div>Jawaban Sebelumnya :</div>
							<div className="w-full p-3 border-2 border-gray-200 rounded-md">
								{answer
									.toLowerCase()
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
				</>
			)}
		</div>
	);
};
