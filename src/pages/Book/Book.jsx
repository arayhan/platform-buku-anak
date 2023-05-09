import { ButtonIcon } from '@/components/atoms';
import { VoiceOver } from '@/components/molecules/VoiceOver';
import { BOOK_DATA } from '@/data/bookData';
import { Fade } from '@/transitions/Fade/Fade';
import { playSound } from '@/utils/helpers';
import clsx from 'clsx';
import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { useNavigate } from 'react-router-dom';

export const Book = ({ isReadAloud = true }) => {
	const bookRef = useRef(null);
	const navigate = useNavigate();

	const [time, setTime] = useState(0);
	const [maxTime, setMaxTime] = useState(0);
	const [page, setPage] = useState(0);
	const [totalPage, setTotalPage] = useState(0);
	const [pageData, setPageData] = useState(null);

	const handleChangePage = (element) => {
		setPage(element.data);
	};

	const handleGoToPrevPage = () => {
		bookRef.current.pageFlip().flipPrev();
		playSound(require('@/audios/book_page_turn.mp3'));
	};

	const handleGoToNextPage = () => {
		bookRef.current.pageFlip().flipNext();
		playSound(require('@/audios/book_page_turn.mp3'));
	};

	const handleVoiceOverEnded = () => {
		if (page >= bookRef.current.pageFlip().pages.pages.length - 1) {
			navigate('/book/finish');
		} else {
			handleGoToNextPage();
		}
	};

	useEffect(() => {
		const selectedPage = BOOK_DATA.pages[page];

		setTime(0);
		setPageData(selectedPage);

		if (bookRef.current.pageFlip()) {
			setTotalPage(bookRef.current.pageFlip().getPageCount());
		}
	}, [page]);

	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		if (time <= maxTime) setTime((time) => time + 100);
	// 		else clearInterval(interval);
	// 	}, 100);

	// 	return () => {
	// 		clearInterval(interval);
	// 	};
	// }, [time, maxTime]);

	return (
		<Fade>
			{isReadAloud && <VoiceOver onEnded={handleVoiceOverEnded} page={page} />}

			<div className="flex flex-col justify-center h-screen max-w-screen-lg mx-auto -mt-8">
				<HTMLFlipBook
					ref={bookRef}
					autoSize
					width={656.5}
					height={328.25}
					onFlip={handleChangePage}
					flippingTime={500}
					showPageCorners
					mobileScrollSupport
				>
					{BOOK_DATA.pages?.map((page) => (
						<div key={page.number} className="w-[80vw] h-full overflow-hidden rounded-lg shadow-xl">
							<img className="object-contain w-[92vw] rounded-lg h-full" src={page.image} alt="" />
						</div>
					))}
				</HTMLFlipBook>

				<div className="mt-4 text-sm text-center md:-mt-5 lg:-mt-16 lg:text-lg">{pageData?.text}</div>
			</div>

			<div className="absolute flex items-center justify-center gap-8 transform -translate-x-1/2 bottom-8 left-1/2">
				<ButtonIcon
					icon={require('@/images/symbol/previous left.png')}
					className={clsx('w-12')}
					onClick={handleGoToPrevPage}
					disabled={page === 0}
				/>
				<ButtonIcon
					icon={require('@/images/symbol/previous right.png')}
					className={clsx('w-12')}
					onClick={handleGoToNextPage}
					disabled={page === totalPage - 1}
				/>
			</div>
		</Fade>
	);
};
