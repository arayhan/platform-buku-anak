import { Button } from '@/components/atoms/Button';
import { SpeechToText } from '@/components/molecules/SpeechToText';
import { QUIZ_DATA } from '@/data/quizData';
import { useAppStore } from '@/store/store';
import { Fade } from '@/transitions/Fade/Fade';
import { QUIZ_TYPE } from '@/utils/constants';
import { toLowerCaseAndremoveSymbol } from '@/utils/helpers';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSpeechRecognition } from 'react-speech-recognition';

export const Quiz = () => {
	const navigate = useNavigate();
	const { transcript, resetTranscript } = useSpeechRecognition();

	const { quizAnswers, setQuizAnswers } = useAppStore();

	const [currentIndex, setCurrentIndex] = useState(0);
	const [currentAnswer, setCurrentAnswer] = useState(null);
	const [errorMessage, setErrorMessage] = useState(null);

	const currentQuiz = QUIZ_DATA[currentIndex];

	const handleSetAnswer = () => {
		if (currentIndex + 1 >= QUIZ_DATA.length) {
			navigate('/quiz/result');
		} else {
			if (currentAnswer || transcript) {
				let score = 0;
				const answer = currentQuiz?.type === QUIZ_TYPE.OPTION ? currentAnswer : transcript || currentAnswer;

				if (currentQuiz?.type === QUIZ_TYPE.OPTION && currentAnswer?.isCorrect) score = 100;
				else if (currentQuiz?.type === QUIZ_TYPE.INPUT_SOUND) {
					toLowerCaseAndremoveSymbol(answer)
						.split(' ')
						.forEach((word) => {
							if (toLowerCaseAndremoveSymbol(currentQuiz?.text).split(' ').includes(word))
								score +=
									100 /
									toLowerCaseAndremoveSymbol(currentQuiz?.text)
										.replace(/[^a-zA-Z ]/g, '')
										.split(' ').length;
						});
				}

				quizAnswers[currentIndex] = {
					type: currentQuiz?.type,
					answer,
					score,
				};
				setQuizAnswers(quizAnswers);

				resetTranscript();
				setCurrentAnswer(quizAnswers[currentIndex + 1]?.answer || null);
				setCurrentIndex(currentIndex + 1);
				setErrorMessage(null);
			} else {
				if (currentQuiz?.type === QUIZ_TYPE.OPTION) setErrorMessage('Pilih salah satu jawaban terlebih dahulu!');
				else if (currentQuiz?.type === QUIZ_TYPE.INPUT_SOUND) {
					setErrorMessage('Harap memasukkan rekaman suara terlebih dahulu!');
				}
			}
		}
	};

	const handlePrevious = () => {
		setCurrentAnswer(quizAnswers[currentIndex - 1].answer);
		setCurrentIndex(currentIndex - 1);
	};

	useEffect(() => {
		if (quizAnswers.length) {
			setCurrentIndex(quizAnswers.length - 1);
		}
	}, [quizAnswers]);

	return (
		<Fade>
			<div className="w-full max-h-[92vh] px-20 py-16 mt-16 mb-8 space-y-10 overflow-y-scroll bg-white bg-opacity-50 rounded-lg shadow-lg">
				<div>
					<h1 className="text-xl font-bold text-center">Quiz</h1>
				</div>
				<hr />
				<div className="space-y-8">
					<div className="space-y-2 text-center">
						<div>
							Pertanyaan {currentIndex + 1} dari {QUIZ_DATA.length}
						</div>
						<h1 className="text-xl font-semibold">{currentQuiz?.question}</h1>
						{currentQuiz?.type === QUIZ_TYPE.INPUT_SOUND && (
							<h1 className="text-xl font-bold">"{currentQuiz?.text}"</h1>
						)}
					</div>
					{currentQuiz?.type === QUIZ_TYPE.INPUT_SOUND && (
						<div className="flex flex-col items-center justify-center gap-4">
							<SpeechToText
								request={currentQuiz?.text.toLowerCase().replace(/[^a-zA-Z ]/g, '')}
								answer={currentAnswer}
							/>
						</div>
					)}
					{currentQuiz?.type === QUIZ_TYPE.OPTION && (
						<div className="grid gap-3">
							{currentQuiz?.options.map((option, index) => {
								const checked = currentAnswer?.id === option.id;
								return (
									<label
										key={option.id}
										htmlFor={option.id}
										className={clsx(
											'flex items-center gap-4 p-3 rounded-md hover:cursor-pointer border-2',
											checked && 'border-app-blue-sapphire-500'
										)}
									>
										<input
											className="w-4 h-4 checked:bg-app-blue-sapphire-500"
											type="radio"
											id={option.id}
											name="quiz"
											checked={checked}
											value={option.id}
											onChange={() => setCurrentAnswer(option)}
										/>
										<div className="flex items-start gap-2">
											<div>
												{index === 0 && 'A'}
												{index === 1 && 'B'}
												{index === 2 && 'C'}.
											</div>
											<div>{option.text}</div>
										</div>
									</label>
								);
							})}
						</div>
					)}
					{errorMessage && !transcript && !currentAnswer && (
						<div className="text-center text-red-500">{errorMessage}</div>
					)}
				</div>
				<hr />
				<div className="flex items-center justify-center gap-6">
					{currentIndex > 0 && <Button label="Sebelumnya" onClick={handlePrevious} />}
					<Button label="Jawab" onClick={() => handleSetAnswer()} />
				</div>
			</div>
		</Fade>
	);
};
