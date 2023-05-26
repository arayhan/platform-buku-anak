import { Button } from '@/components/atoms/Button';
import { SpeechToText } from '@/components/molecules/SpeechToText';
import { QUIZ_DATA } from '@/data/quizData';
import { useAppStore } from '@/store/store';
import { Fade } from '@/transitions/Fade/Fade';
import { QUIZ_TYPE } from '@/utils/constants';
import { toLowerCaseAndremoveSymbol } from '@/utils/helpers';
import clsx from 'clsx';
import Swal from 'sweetalert2';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Quiz = () => {
	const navigate = useNavigate();

	const { quizAnswers, setQuizAnswers } = useAppStore();

	const [transcript, setTranscript] = useState();
	const [currentIndex, setCurrentIndex] = useState(0);
	const [currentAnswer, setCurrentAnswer] = useState(null);
	const [errorMessage, setErrorMessage] = useState(null);

	const currentQuiz = QUIZ_DATA[currentIndex];

	const handleSetAnswer = () => {
		if (currentAnswer || transcript) {
			let score = 0;
			const answer = currentQuiz?.type === QUIZ_TYPE.OPTION ? currentAnswer : transcript || currentAnswer;
			const answerLength = toLowerCaseAndremoveSymbol(answer).split(' ').length;

			if (currentQuiz?.type === QUIZ_TYPE.OPTION && currentAnswer?.isCorrect) score = 100;
			else if (currentQuiz?.type === QUIZ_TYPE.INPUT_SOUND) {
				let correctWords = 0;
				toLowerCaseAndremoveSymbol(answer)
					.split(' ')
					.forEach((word) => {
						if (toLowerCaseAndremoveSymbol(currentQuiz?.text).split(' ').includes(word)) correctWords++;
					});
				score = Math.ceil((correctWords / toLowerCaseAndremoveSymbol(currentQuiz?.text).split(' ').length) * 100);
			}

			const isAnswerCorrect =
				score === 100 && answerLength === toLowerCaseAndremoveSymbol(currentQuiz?.text).split(' ').length;

			Swal.fire({
				title: isAnswerCorrect
					? 'Yay! Jawaban Benar!'
					: currentQuiz?.type === QUIZ_TYPE.OPTION ||
					  score < 50 ||
					  answerLength > toLowerCaseAndremoveSymbol(currentQuiz?.text).split(' ').length
					? 'Jawabanmu belum tepat 😢. Bisa coba lagi?'
					: score >= 50 && 'Jawabanmu hampir benar, sepertinya ada kata yang tertinggal 🤔. Bisa coba lagi?',
				imageUrl: isAnswerCorrect ? require('@/images/squishiverse-squishies.gif') : require('@/images/200w.gif'),
				imageAlt: 'image result',
				width: 600,
				padding: '3em',
				color: '#7398b5',
				background: '#fff',
				confirmButtonText: isAnswerCorrect ? 'Lanjut' : 'Coba Lagi',
				backdrop: 'rgba(115, 152, 181, 0.4)',
			}).then(() => {
				if (isAnswerCorrect) {
					if (currentIndex + 1 >= QUIZ_DATA.length) {
						navigate('/quiz/overview');
					} else {
						quizAnswers[currentIndex] = {
							quiz: currentQuiz,
							answer,
							score: score.toFixed(),
						};

						setQuizAnswers(quizAnswers);
						setCurrentIndex(currentIndex + 1);
						setErrorMessage(null);
					}
				}
			});
		} else {
			if (currentQuiz?.type === QUIZ_TYPE.OPTION) setErrorMessage('Pilih salah satu jawaban terlebih dahulu, ya! 😄');
			else if (currentQuiz?.type === QUIZ_TYPE.INPUT_SOUND) {
				setErrorMessage('Harap memasukkan rekaman suara terlebih dahulu!');
			}
		}
	};

	const handlePrevious = () => {
		const prevAnswer = quizAnswers[currentIndex - 1];
		setCurrentAnswer(prevAnswer.answer);
		if (prevAnswer.quiz.type === QUIZ_TYPE.INPUT_SOUND) setTranscript(prevAnswer.answer);
		setCurrentIndex(currentIndex - 1);
	};

	useEffect(() => {
		if (quizAnswers.length) setCurrentIndex(quizAnswers.length);
	}, [quizAnswers]);

	return (
		<Fade>
			<div className="w-full max-h-[85vh] px-8 py-12 mt-24 mb-8 space-y-8 overflow-y-scroll bg-white bg-opacity-50 rounded-lg shadow-lg">
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
								request={currentQuiz?.text?.toLowerCase().replace(/[^a-zA-Z ]/g, '')}
								onChangeTranscript={setTranscript}
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
			{currentIndex === 0 && (
				<div className="flex items-center justify-center">
					<Button label="Kembali" onClick={() => navigate('/book/finish')} />
				</div>
			)}
		</Fade>
	);
};
