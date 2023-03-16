import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import { Background } from './components/atoms';
import { ButtonBacksound } from './components/molecules';
import { BOOK_DATA } from './data/bookData';
import { MainMenu } from './pages';

function App() {
	const [isStartReading, setIsStartReading] = React.useState(false);

	const onStartReading = () => {
		setIsStartReading(true);
	};

	return (
		<div className="h-screen max-h-screen overflow-hidden">
			<Background />

			<div className="container relative flex flex-col items-center justify-center h-full max-w-screen-xl gap-12 mx-auto top-5">
				{!isStartReading && <MainMenu onClickStart={onStartReading} />}
				{isStartReading && (
					<div className="overflow-hidden rounded-lg shadow-xl">
						<HTMLFlipBook width={1036.5} height={518.25}>
							{BOOK_DATA.pages.map((page) => (
								<div key={page.number}>
									<img src={page.image} alt="" />
								</div>
							))}
						</HTMLFlipBook>
					</div>
				)}
			</div>

			<div className="absolute bottom-5 right-8">
				<ButtonBacksound />
			</div>
		</div>
	);
}

export default App;
