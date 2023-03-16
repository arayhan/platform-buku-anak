import { Route, Routes } from 'react-router-dom';
import { MainMenu } from '@/pages';

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<MainMenu />} />
			</Routes>
		</div>
	);
}

export default App;
