import { BOOK_DATA } from '@/data/bookData';
import { useEffect, useRef } from 'react';

export const VoiceOver = ({ page, onEnded }) => {
	const voiceOverRef = useRef(null);

	useEffect(() => {
		if (voiceOverRef.current) {
			voiceOverRef.current.pause();
			voiceOverRef.current.currentTime = 0;
			voiceOverRef.current.src = BOOK_DATA.pages[page].audio;
			voiceOverRef.current.play();
		}
	}, [voiceOverRef, page]);

	return (
		<div>
			<audio ref={voiceOverRef} src={BOOK_DATA.pages[page].audio} onEnded={onEnded} autoPlay />
		</div>
	);
};
