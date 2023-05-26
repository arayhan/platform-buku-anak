import { READING_MODE } from '@/utils/constants';
import create from 'zustand';
import { persist, devtools } from 'zustand/middleware';

const states = (set, get) => ({
	readingMode: READING_MODE.READ_ALOUD,
	showSplashScreen: true,
	quizAnswers: [],
	currentAnswer: null,

	setReadingMode: (mode) => {
		set({ readingMode: mode });
	},
	setShowSplashScreen: (show) => {
		set({ showSplashScreen: show });
	},
	setQuizAnswers: (answers) => {
		set({ quizAnswers: answers });
	},
	resetQuizAnswers: () => {
		set({ quizAnswers: [] });
	},
	setCurrentAnswer: (answer) => {
		set({ currentAnswer: answer });
	},
});

export const useAppStore = create(devtools(persist(states, { name: 'app-store', getStorage: () => localStorage })));
