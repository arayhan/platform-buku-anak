import { ButtonIcon } from '@/components/atoms';
import { VoiceOver } from '@/components/molecules/VoiceOver';
import { BOOK_DATA } from '@/data/bookData';
import { useAppStore } from '@/store/store';
import { Fade } from '@/transitions/Fade/Fade';
import { playSound } from '@/utils/helpers';
import { READING_MODE } from '@/utils/constants';
import { MdReplay } from 'react-icons/md';
import clsx from 'clsx';
import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';

export const Book = () => {
	const bookRef = useRef(null);
	const navigate = useNavigate();

	const { readingMode } = useAppStore();

	const IS_READ_ALOUD = readingMode === READING_MODE.READ_ALOUD;

	const [time, setTime] = useState(0);
	const [highlightIndex, setHighlightIndex] = useState(0);

	const [isPause, setIsPause] = useState(!IS_READ_ALOUD);
	const [isVoiceOverReady, setIsVoiceOverReady] = useState(false);
	const [page, setPage] = useState(0);
	const [totalPage, setTotalPage] = useState(BOOK_DATA.pages.length);
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

	const handleReplay = () => {
		setTime(0);
		setHighlightIndex(0);
		setIsPause(false);
	};

	useEffect(() => {
		const currentPageData = BOOK_DATA.pages[page];

		setPageData(currentPageData);

		if (IS_READ_ALOUD && isVoiceOverReady) {
			const currentPageHighlight = currentPageData.highlight;
			const nextHighlight = currentPageHighlight?.[highlightIndex + 1] || null;

			const interval = setInterval(() => {
				if (!isPause) {
					setTime((prevTime) => prevTime + 100);
				}
			}, 100);

			if (time > nextHighlight?.time || highlightIndex + 1 > currentPageHighlight?.length) {
				setHighlightIndex((prevIndex) => prevIndex + 1);
			}

			return () => clearInterval(interval);
		}
	}, [isVoiceOverReady, IS_READ_ALOUD, highlightIndex, time, page, isPause]);

	useEffect(() => {
		setIsVoiceOverReady(false);
		setHighlightIndex(0);
		setTime(0);

		if (page > 0) setIsPause(false);
		if (bookRef.current.pageFlip()) setTotalPage(bookRef.current.pageFlip().getPageCount());
	}, [page]);

	useEffect(() => {
		const handleScroll = () => {};
		document.addEventListener('scroll', handleScroll, { passive: true });
		return () => document.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<Fade>
			{IS_READ_ALOUD && (
				<VoiceOver
					time={time}
					isPause={isPause}
					onVoiceOverReady={() => setIsVoiceOverReady(true)}
					onEnded={handleVoiceOverEnded}
					page={page}
				/>
			)}

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
				>
					{BOOK_DATA.pages?.map((page) => (
						<div key={page.number} className="w-[80vw] h-full overflow-hidden rounded-lg shadow-xl">
							<img className="object-contain w-[92vw] rounded-lg h-full" src={page.image} alt="" />
						</div>
					))}
				</HTMLFlipBook>

				<div className="relative mt-4 text-sm text-center z-11 md:text-base md:-mt-5 lg:-mt-16 lg:text-lg">
					{IS_READ_ALOUD &&
						pageData?.highlight &&
						pageData?.highlight?.map((highlight, index) => {
							const isHighlight = highlightIndex === index;
							return isHighlight ? <span className="text-green-500">{highlight.word} </span> : `${highlight.word} `;
						})}
					{(!pageData?.highlight || !IS_READ_ALOUD) && pageData?.text}
				</div>
			</div>

			<div>
				<div className="text-xs italic text-center opacity-50">
					Halaman {page + 1} dari {totalPage}
				</div>
				<div className="flex items-center justify-between gap-16 p-4 transform">
					<ButtonIcon
						id="buttonPrev"
						icon={require('@/images/symbol/previous left.png')}
						className={clsx('w-10 md:w-11 lg:w-12')}
						onClick={handleGoToPrevPage}
						disabled={page === 0}
					/>
					<Tooltip anchorSelect="#buttonPrev" place="top">
						Sebelumnya
					</Tooltip>
					{IS_READ_ALOUD && (
						<div className="flex gap-4">
							<ButtonIcon
								id="buttonPlayPause"
								icon={require(`@/images/symbol/${isPause ? 'play' : 'pause'}.png`)}
								className={clsx('w-10 md:w-11 lg:w-12')}
								onClick={() => setIsPause((isPause) => !isPause)}
							/>
							<Tooltip anchorSelect="#buttonPlayPause" place="top">
								{isPause ? 'Putar' : 'Jeda'}
							</Tooltip>

							<ButtonIcon
								id="buttonReplay"
								className={clsx(
									'flex items-center justify-center',
									'w-10 md:w-11 lg:w-12 h-10 md:h-11 lg:h-12 text-sm text-[1.8em]',
									'text-white rounded-lg cursor-pointer bg-app-carmine-pink'
								)}
								disabled={isPause || time === 0}
								onClick={handleReplay}
							>
								<MdReplay />
							</ButtonIcon>
							<Tooltip anchorSelect="#buttonReplay" place="top">
								Ulangi
							</Tooltip>
						</div>
					)}
					<ButtonIcon
						id="buttonNext"
						icon={require('@/images/symbol/previous right.png')}
						className={clsx('w-10 md:w-11 lg:w-12')}
						onClick={handleGoToNextPage}
						disabled={IS_READ_ALOUD && page === totalPage - 1}
					/>
					<Tooltip anchorSelect="#buttonNext" place="top">
						Berikutnya
					</Tooltip>
				</div>
			</div>
		</Fade>
	);
};
