export const playSoundEffect = (soundEffect) => {
	const audio = new Audio(soundEffect);
	audio.play();
};
