import { Button } from '@/components/atoms/Button';
import { SpeechToText } from '@/components/molecules/SpeechToText';
import { QUIZ_DATA } from '@/data/quizData';
import { Fade } from '@/transitions/Fade/Fade';
import { QUIZ_TYPE } from '@/utils/constants';
import clsx from 'clsx';
import React, { useState } from 'react';

export const Quiz = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [currentAnswer, setCurrentAnswer] = useState(null);
	const [answers, setAnswers] = useState([]);
	const [errorMessage, setErrorMessage] = useState(null);

	const currentQuiz = QUIZ_DATA[currentIndex];

	const handleSetAnswer = () => {
		if (currentAnswer) {
			answers[currentIndex] = currentAnswer;
			setAnswers(answers);
			setCurrentAnswer(null);
			setCurrentIndex(currentIndex + 1);
			setErrorMessage(null);
		} else {
			if (currentQuiz.type === QUIZ_TYPE.OPTION) setErrorMessage('Pilih salah satu jawaban terlebih dahulu!');
			else if (currentQuiz.type === QUIZ_TYPE.INPUT_SOUND) {
				setErrorMessage('Harap memasukkan rekaman suara terlebih dahulu!');
			}
		}
	};

	const handlePrevious = () => {
		setCurrentAnswer(answers[currentIndex - 1]);
		setCurrentIndex(currentIndex - 1);
	};

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
						<h1 className="text-xl font-semibold">{currentQuiz.question}</h1>
						{currentQuiz.type === QUIZ_TYPE.INPUT_SOUND && <h1 className="text-xl font-bold">"{currentQuiz.text}"</h1>}
					</div>
					{currentQuiz.type === QUIZ_TYPE.INPUT_SOUND && (
						<div className="flex flex-col items-center justify-center gap-4">
							<SpeechToText
								request={currentQuiz.text.toLowerCase().replace(/[^a-zA-Z ]/g, '')}
								onChangeTranscript={(transcript) => setAnswers(transcript)}
							/>
							{currentAnswer && <audio src={currentAnswer} controls autoPlay />}
						</div>
					)}
					{currentQuiz.type === QUIZ_TYPE.OPTION && (
						<div className="grid gap-3">
							{currentQuiz.options.map((option, index) => {
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
					{errorMessage && !currentAnswer && <div className="text-center text-red-500">{errorMessage}</div>}
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
