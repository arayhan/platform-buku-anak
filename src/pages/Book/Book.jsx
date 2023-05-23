import { ButtonIcon } from '@/components/atoms';
import { VoiceOver } from '@/components/molecules/VoiceOver';
import { BOOK_DATA } from '@/data/bookData';
import { useAppStore } from '@/store/store';
import { Fade } from '@/transitions/Fade/Fade';
import { playSound } from '@/utils/helpers';
import { READING_MODE } from '@/utils/constants';
import clsx from 'clsx';
import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { useNavigate } from 'react-router-dom';

export const Book = () => {
	const bookRef = useRef(null);
	const navigate = useNavigate();

	const { readingMode } = useAppStore();

	const IS_READ_ALOUD = readingMode === READING_MODE.READ_ALOUD;

	const [time, setTime] = useState(0);
	const [maxTime, setMaxTime] = useState(0);
	const [isPause, setIsPause] = useState(true);
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
		if (page >= bookRef.current.pageFlip().pages.pages.length - 1) {
			navigate('/book/finish');
		} else {
			bookRef.current.pageFlip().flipNext();
			playSound(require('@/audios/book_page_turn.mp3'));
		}
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
		setIsPause(false);

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
			{IS_READ_ALOUD && <VoiceOver isPause={isPause} onEnded={handleVoiceOverEnded} page={page} />}

			<div className="flex flex-col justify-center h-[93vh] max-w-screen-lg mx-auto -mt-12">
				<HTMLFlipBook
					ref={bookRef}
					autoSize
					width={605.5}
					height={302.25}
					maxWidth={656.5}
					maxHeight={328.25}
					onFlip={handleChangePage}
					flippingTime={500}
					showPageCorners
					mobileScrollSupport
					// className="bg-red-500 w-full max-w-[80vw]"
				>
					{BOOK_DATA.pages?.map((page) => (
						<div key={page.number} className="w-[80vw] h-full overflow-hidden rounded-lg shadow-xl">
							<img className="object-contain w-[92vw] rounded-lg h-full" src={page.image} alt="" />
						</div>
					))}
				</HTMLFlipBook>

				<div className="relative mt-4 text-xs text-center z-11 md:text-base md:-mt-5 lg:-mt-16 lg:text-lg">
					{pageData?.text}
				</div>
				<div className="mt-3 text-xs italic text-center opacity-50">
					Halaman {page + 1} dari {totalPage}
				</div>
			</div>

			<div className="flex items-center justify-between gap-16 p-4 transform">
				<ButtonIcon
					icon={require('@/images/symbol/previous left.png')}
					className={clsx('w-12')}
					onClick={handleGoToPrevPage}
					disabled={page === 0}
				/>
				{IS_READ_ALOUD && (
					<ButtonIcon
						icon={require(`@/images/symbol/${isPause ? 'play' : 'pause'}.png`)}
						className={clsx('w-12')}
						onClick={() => setIsPause((isPause) => !isPause)}
					/>
				)}
				<ButtonIcon
					icon={require('@/images/symbol/previous right.png')}
					className={clsx('w-12')}
					onClick={handleGoToNextPage}
					disabled={IS_READ_ALOUD && page === totalPage - 1}
				/>
			</div>
		</Fade>
	);
};
