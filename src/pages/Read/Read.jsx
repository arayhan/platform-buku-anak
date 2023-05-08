import React, { useState } from 'react';

// import { Opening } from './Opening';
import { Fade } from '@/transitions/Fade/Fade';
import { Book } from './Book';

const Read = () => {
	// const [isOpening, setIsOpening] = useState(true);

	return (
		<div className="relative -top-[30px]">
			{/* {isOpening && (
				<Fade>
					<Opening onFinished={() => setIsOpening(false)} />
				</Fade>
			)}

			{!isOpening && ( */}
			<Fade>
				<Book />
			</Fade>
			{/* )} */}
		</div>
	);
};

export default Read;
