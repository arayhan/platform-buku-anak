import { useRef } from 'react';
import { Background } from './components/atoms';
import { ButtonBacksound } from './components/molecules';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { ButtonGoHome } from './components/molecules/ButtonGoHome';
import { AnimatePresence } from 'framer-motion';
import Notifications from 'react-notify-toast';

import { MainMenu } from './pages/MainMenu/MainMenu';
import { Book } from './pages/Book/Book';
import { Button } from './components/atoms/Button';
import { UsageInstruction } from './pages/UsageInstruction/UsageInstruction';
import { Author } from './pages/Author/Author';
import { ButtonFullScreen } from './components/molecules/ButtonFullScreen';
import { useAppStore } from './store/store';
import { SplashScreen } from './pages/SplashScreen/SplashScreen';

function App() {
	const navigate = useNavigate();
	const location = useLocation();

	const { showSplashScreen } = useAppStore();

	const { pathname } = location;

	const exportRef = useRef();

	const IS_AT_HOME = pathname === '/';
	const IS_AT_SPLASH = pathname === '/splash';
	const IS_AT_USAGE_INSTRUCTION = pathname === '/usage-instruction';

	return (
		<div ref={exportRef} className="h-screen max-h-screen overflow-hidden">
			<Background />
			<Notifications />

			<div className="container h-full max-w-screen-xl mx-auto">
				<AnimatePresence mode="wait">
					<Routes location={location} key={pathname}>
						<Route path="/" exact element={<MainMenu />} />
						<Route path="/usage-instruction" element={<UsageInstruction />} />
						<Route path="/author" element={<Author />} />
						<Route path="/book" element={<Book />} />
						<Route path="/splash" element={<SplashScreen />} />
					</Routes>
				</AnimatePresence>
			</div>

			{!IS_AT_SPLASH && (
				<div className="absolute flex items-start gap-4 top-5 left-8">
					{!IS_AT_HOME && !IS_AT_USAGE_INSTRUCTION && !IS_AT_SPLASH && <ButtonGoHome />}
					{IS_AT_HOME && (
						<Button icon={require('@/images/symbol/buku.png')} size="sm" onClick={() => navigate('/usage-instruction')}>
							Petunjuk Penggunaan
						</Button>
					)}
				</div>
			)}

			{!IS_AT_SPLASH && (
				<div className="absolute flex items-start gap-4 top-5 right-8">
					<ButtonFullScreen />
					<ButtonBacksound />
				</div>
			)}
		</div>
	);
}

export default App;
