import { ButtonIcon } from '@/components/atoms';
import { VoiceOver } from '@/components/molecules/VoiceOver';
import { BOOK_DATA } from '@/data/bookData';
import { Fade } from '@/transitions/Fade/Fade';
import { playSound } from '@/utils/helpers';
import clsx from 'clsx';
import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';

export const Book = ({ isReadAloud = true }) => {
	const bookRef = useRef(null);

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
		<Fade className="flex items-center justify-center h-screen">
			{isReadAloud && <VoiceOver page={page} />}

			<div className="grid max-w-screen-lg grid-cols-12 gap-6">
				<div className="flex items-center justify-center col-span-1">
					<ButtonIcon
						icon={require('@/images/symbol/previous left.png')}
						className={clsx('w-12')}
						onClick={handleGoToPrevPage}
						disabled={page === 0}
					/>
				</div>
				<div className="flex flex-col items-center justify-center col-span-10">
					<div>
						<HTMLFlipBook
							ref={bookRef}
							autoSize
							width={836.5}
							height={418.25}
							onFlip={handleChangePage}
							flippingTime={500}
							showPageCorners
						>
							{BOOK_DATA.pages?.map((page) => (
								<div key={page.number} className="w-full overflow-hidden rounded-lg shadow-xl">
									<img className="w-full" src={page.image} alt="" />
								</div>
							))}
						</HTMLFlipBook>
					</div>
					<div className="mt-4 text-sm text-center lg:text-lg">{pageData?.text}</div>
				</div>
				<div className="flex items-center justify-center col-span-1">
					<ButtonIcon
						icon={require('@/images/symbol/previous right.png')}
						className={clsx('w-12')}
						onClick={handleGoToNextPage}
						disabled={page === totalPage - 1}
					/>
				</div>
			</div>
		</Fade>
	);
};
