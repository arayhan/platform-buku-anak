import { Button } from '@/components/atoms/Button';
import { QUIZ_DATA } from '@/data/quizData';
import { useAppStore } from '@/store/store';
import { Fade } from '@/transitions/Fade/Fade';
import { QUIZ_TYPE } from '@/utils/constants';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const QuizOverview = () => {
	const navigate = useNavigate();

	const { quizAnswers, resetQuizAnswers } = useAppStore();

	useEffect(() => {
		if (QUIZ_DATA.length !== quizAnswers.length) {
			navigate('/quiz');
		}
	}, []);

	return (
		<Fade>
			<div className="w-full max-h-[75vh] px-4 md:px-10 lg:px-20 py-10 mt-20 mb-8 space-y-10 overflow-y-scroll bg-white bg-opacity-50 rounded-lg shadow-lg">
				<div>
					<h1 className="text-xl font-bold text-center">Quiz Overview</h1>
				</div>
				<hr />
				<div className="grid gap-8">
					<div>
						<h1 className="p-12 text-3xl font-bold text-center text-white bg-green-600 rounded-lg">{`Skor akhir : ${
							quizAnswers.reduce((acc, curr) => acc + Number(curr.score), 0) / QUIZ_DATA.length
						}`}</h1>
					</div>
					{quizAnswers.map((quizAnswer, index) => (
						<div key={index}>
							<div className="flex items-start gap-4">
								<div className="flex items-center justify-center w-8 h-8 text-white rounded-full bg-app-blue-sapphire-500">
									{index + 1}
								</div>
								<div className="grid w-11/12 gap-2">
									<h1 className="text-lg font-semibold">{quizAnswer.quiz.question}</h1>
									{quizAnswer.quiz.type === QUIZ_TYPE.INPUT_SOUND && (
										<h1 className="text-lg">"{quizAnswer.quiz.text}"</h1>
									)}
									<div className="w-full p-3 border rounded-lg">
										<h1>Jawabanmu :</h1>
										{quizAnswer.quiz.type === QUIZ_TYPE.OPTION && <p className="text-lg">"{quizAnswer.answer.text}"</p>}
										{quizAnswer.quiz.type === QUIZ_TYPE.INPUT_SOUND && <p className="text-lg">"{quizAnswer.answer}"</p>}
									</div>
									<div className="font-bold text-app-carmine-pink">Skor : {quizAnswer?.score}</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="flex items-center justify-center gap-8">
				<Button
					label="Ulangi Kuis"
					onClick={() => {
						resetQuizAnswers();
						navigate('/quiz');
					}}
				/>
				<Button
					label="Kembali ke Menu"
					onClick={() => {
						resetQuizAnswers();
						navigate('/book/finish');
					}}
				/>
			</div>
		</Fade>
	);
};
