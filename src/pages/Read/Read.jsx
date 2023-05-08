import { BOOK_DATA } from '@/data/bookData';
import React from 'react';
import HTMLFlipBook from 'react-pageflip';

const Read = () => {
	return (
		<div className="overflow-hidden rounded-lg shadow-xl">
			<HTMLFlipBook width={1036.5} height={518.25}>
				{BOOK_DATA.pages.map((page) => (
					<div key={page.number}>
						<img src={page.image} alt="" />
					</div>
				))}
			</HTMLFlipBook>
		</div>
	);
};

export default Read;
