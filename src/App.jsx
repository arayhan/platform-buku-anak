import React from 'react';
import { Background } from './components/atoms';
import { ButtonBacksound } from './components/molecules';
import { MainMenu } from './pages';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ButtonGoHome } from './components/molecules/ButtonGoHome';
import Read from './pages/Read/Read';

function App() {
	const location = useLocation();

	const IS_AT_HOME = location.pathname === '/';

	return (
		<div className="h-screen max-h-screen overflow-hidden">
			<Background />

			<div className="container relative flex flex-col items-center justify-center h-full max-w-screen-xl gap-12 mx-auto top-5">
				<Routes>
					<Route path="/read" element={<Read />} />
					<Route path="/" exact element={<MainMenu />} />
				</Routes>
			</div>

			<div className="absolute flex items-start gap-4 bottom-5 right-8">
				{!IS_AT_HOME && <ButtonGoHome />}
				<ButtonBacksound />
			</div>
		</div>
	);
}

export default App;
