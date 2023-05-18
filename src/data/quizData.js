import { QUIZ_TYPE } from '@/utils/constants';

export const QUIZ_DATA = [
	{
		id: '83d392b2-b952-4052-8730-c184fffc3f9e',
		type: QUIZ_TYPE.OPTION,
		question: 'Siapa yang memberikan pensil kepada Habil?',
		options: [
			{ id: 'fc542137-a3ac-4310-b1f1-44ed4dd5acee', text: 'Ibu', isCorrect: true },
			{ id: 'e3af143b-4c47-46b5-ac91-ce567ca192e6', text: 'Ayah', isCorrect: false },
			{ id: 'dc6366cb-8250-4faf-9f0e-d522fa8e47ef', text: 'Bima', isCorrect: false },
		],
	},
	{
		id: '2d75f51c-41b3-4ca5-9b10-9e808432e69d',
		type: QUIZ_TYPE.INPUT_SOUND,
		question: 'Bacalah dengan nyaring kalimat di bawah ini!',
		text: 'Hari ini menjadi hari yang istimewa bagi Habil. Ibu memberikannya pensil baru berwarna biru.',
	},
	{
		id: 'f461f096-efe1-43db-9f5b-e05defae1eec',
		type: QUIZ_TYPE.OPTION,
		question: 'Bagaimana cara Habil menemukan pensilnya?',
		options: [
			{ id: '84220bb7-5543-4558-b8da-a94a9d068581', text: 'Mencari di kelas', isCorrect: true },
			{ id: '5485df83-34d4-40e8-8e76-f823cadf8b51', text: 'Meminta bantuan guru', isCorrect: false },
			{ id: '70b8d655-309d-4413-a6ae-4293d28fe7ca', text: 'Mencari di kantin', isCorrect: false },
		],
	},
	{
		id: '784c7133-f642-451c-83e2-21a584fbf896',
		type: QUIZ_TYPE.OPTION,
		question: 'Dimana Bima menemukan pensilnya Habil?',
		options: [
			{ id: '3709c813-3d4b-4a2f-8b0d-1f7107f99e09', text: 'Di bawah meja', isCorrect: false },
			{ id: '2cbf93e7-9a40-4bb5-b115-997c6754bcd7', text: 'Di balik pintu', isCorrect: true },
			{ id: 'f43d912b-b3d9-4861-8cad-2c25ce5acdc4', text: 'Di atas kursi', isCorrect: false },
		],
	},
	{
		id: '460088f3-12fa-4682-a9a3-f9fbd5834321',
		type: QUIZ_TYPE.INPUT_SOUND,
		question: 'Bacalah dengan nyaring kalimat di bawah ini!',
		text: 'Hei, lihat! Bima memegang pensil biru, sama seperti pensilnya.',
	},
];
