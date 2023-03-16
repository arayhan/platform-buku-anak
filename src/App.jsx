import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import { Background } from './components/atoms';
import { ButtonBacksound } from './components/molecules';
import { MainMenu } from './pages';

function App() {
	const onStartReading = () => {
		console.log('START');
	};

	return (
		<div className="h-screen max-h-screen overflow-hidden">
			<Background />

			<div className="container relative flex flex-col items-center justify-center h-full max-w-screen-xl gap-12 mx-auto top-5">
				<HTMLFlipBook width={1024} height={650}>
					<div>
						<MainMenu onClickStart={onStartReading} />
					</div>
					<div>Page 2</div>
					<div>Page 3</div>
					<div>Page 4</div>
				</HTMLFlipBook>
			</div>

			<div className="absolute bottom-5 right-8">
				<ButtonBacksound />
			</div>
		</div>
	);
}

export default App;
