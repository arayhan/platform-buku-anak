import { BOOK_DATA } from '@/data/bookData';
import { useEffect, useRef } from 'react';

export const VoiceOver = ({ page, isPause, onEnded }) => {
	const voiceOverRef = useRef(null);

	const handlePlay = () => voiceOverRef.current?.play();
	const handlePause = () => voiceOverRef.current?.pause();

	useEffect(() => {
		if (voiceOverRef.current) {
			handlePause();
			voiceOverRef.current.currentTime = 0;
			voiceOverRef.current.src = BOOK_DATA.pages[page].audio;
			handlePlay();
		}
	}, [voiceOverRef, page]);

	useEffect(() => {
		isPause ? handlePause() : handlePlay();
	}, [isPause]);

	return (
		<div>
			<audio ref={voiceOverRef} src={BOOK_DATA.pages[page].audio} onEnded={onEnded} autoPlay />
		</div>
	);
};
