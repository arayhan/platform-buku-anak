export const playSound = (soundEffect) => {
	const audio = new Audio(soundEffect);
	audio.play();
};

export const toLowerCaseAndremoveSymbol = (text) => {
	return text?.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '');
};
