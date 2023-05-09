import { ButtonIcon } from '@/components/atoms';
import { BOOK_DATA } from '@/data/bookData';
import { Fade } from '@/transitions/Fade/Fade';
import { playSoundEffect } from '@/utils/helpers';
import clsx from 'clsx';
import React, { useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';

export const Book = () => {
	const bookRef = useRef(null);

	const handleGoToPrevPage = () => {
		bookRef.current.pageFlip().flipPrev();
		playSoundEffect(require('@/audios/book_page_turn.mp3'));
	};
	const handleGoToNextPage = () => {
		bookRef.current.pageFlip().flipNext();
		playSoundEffect(require('@/audios/book_page_turn.mp3'));
	};

	return (
			<Fade className="flex items-center justify-center h-screen">
				<div className="flex items-center gap-6">
					<ButtonIcon
						icon={require('@/images/symbol/previous left.png')}
						className={clsx('w-16 ')}
						onClick={handleGoToPrevPage}
						disabled
					/>
					<div className="overflow-hidden rounded-lg shadow-xl">
						<HTMLFlipBook width={1036.5} height={518.25} ref={bookRef} flippingTime={500} showPageCorners>
							{BOOK_DATA.pages.map((page) => (
								<div key={page.number}>
									<img src={page.image} alt="" />
								</div>
							))}
						</HTMLFlipBook>
					</div>
					<ButtonIcon
						icon={require('@/images/symbol/previous right.png')}
						className={clsx('w-16 ')}
						onClick={handleGoToNextPage}
					/>
				</div>
			</Fade>
	);
};
