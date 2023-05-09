import React from 'react';
import { Background } from './components/atoms';
import { ButtonBacksound } from './components/molecules';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { ButtonGoHome } from './components/molecules/ButtonGoHome';
import { AnimatePresence } from 'framer-motion';

import { MainMenu } from './pages/MainMenu/MainMenu';
import { Book } from './pages/Book/Book';
import { Button } from './components/atoms/Button';
import { UsageInstruction } from './pages/UsageInstruction/UsageInstruction';

function App() {
	const navigate = useNavigate();
	const location = useLocation();

	const IS_AT_HOME = location.pathname === '/';

	return (
		<div className="h-screen max-h-screen overflow-hidden">
			<Background />

			<div className="container flex flex-col items-center justify-center h-full max-w-screen-xl gap-12 mx-auto">
				<AnimatePresence mode="wait">
					<Routes location={location} key={location.pathname}>
						<Route path="/usage-instruction" element={<UsageInstruction />} />
						<Route path="/book" element={<Book />} />
						<Route path="/" exact element={<MainMenu />} />
					</Routes>
				</AnimatePresence>
			</div>

			<div className="absolute flex items-start gap-4 top-5 left-8">{!IS_AT_HOME && <ButtonGoHome />}</div>

			<div className="absolute flex items-start gap-4 bottom-5 left-8">
				{IS_AT_HOME && <Button label="Petunjuk Penggunaan" onClick={() => navigate('/usage-instruction')} />}
			</div>

			<div className="absolute flex items-start gap-4 bottom-5 right-8">
				<ButtonBacksound />
			</div>
		</div>
	);
}

export default App;
