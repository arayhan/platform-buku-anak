import React, { useRef } from 'react';
import { Background } from './components/atoms';
import { ButtonBacksound } from './components/molecules';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { ButtonGoHome } from './components/molecules/ButtonGoHome';
import { AnimatePresence } from 'framer-motion';

import { MainMenu } from './pages/MainMenu/MainMenu';
import { Book } from './pages/Book/Book';
import { Button } from './components/atoms/Button';
import { UsageInstruction } from './pages/UsageInstruction/UsageInstruction';
import { ButtonScreenshot } from './components/molecules/ButtonScreenshot';
import { Author } from './pages/Author/Author';
import { ButtonReadingMode } from './components/molecules/ButtonReadingMode';

function App() {
	const navigate = useNavigate();
	const location = useLocation();

	const exportRef = useRef();

	const IS_AT_HOME = location.pathname === '/';
	const IS_AT_BOOK = location.pathname === '/book';

	return (
		<div ref={exportRef} className="h-screen max-h-screen overflow-hidden">
			<Background />

			<div className="container h-full max-w-screen-xl mx-auto">
				<AnimatePresence mode="wait">
					<Routes location={location} key={location.pathname}>
						<Route path="/usage-instruction" element={<UsageInstruction />} />
						<Route path="/author" element={<Author />} />
						<Route path="/book" element={<Book />} />
						<Route path="/" exact element={<MainMenu />} />
					</Routes>
				</AnimatePresence>
			</div>

			<div className="absolute flex items-start gap-4 top-5 left-8">{!IS_AT_HOME && <ButtonGoHome />}</div>

			<div className="absolute flex items-start gap-4 bottom-5 left-8">
				{IS_AT_BOOK && <ButtonReadingMode />}
				{IS_AT_HOME && <Button label="Petunjuk Penggunaan" onClick={() => navigate('/usage-instruction')} />}
				{IS_AT_HOME && <Button label="Author" onClick={() => navigate('/author')} />}
			</div>

			<div className="absolute flex items-start gap-4 bottom-5 right-8">
				<ButtonScreenshot exportRef={exportRef} />
				<ButtonBacksound />
			</div>
		</div>
	);
}

export default App;
