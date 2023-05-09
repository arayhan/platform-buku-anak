export const playSound = (soundEffect) => {
	const audio = new Audio(soundEffect);
	audio.play();
};
