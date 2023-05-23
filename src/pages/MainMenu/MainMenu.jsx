import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Fade } from '@/transitions/Fade/Fade';
import { useAppStore } from '@/store/store';
import { Button } from '@/components/atoms/Button';
import { READING_MODE } from '@/utils/constants';

export const MainMenu = () => {
	const navigate = useNavigate();

	const { showSplashScreen, setReadingMode } = useAppStore();

	const handleOpenBook = (readingMode) => {
		setReadingMode(readingMode);
		navigate('/book');
	};

	useEffect(() => {
		if (showSplashScreen) navigate('/splash');
	}, [navigate, showSplashScreen]);

	return (
		<Fade className="flex flex-col items-center justify-center w-full h-screen gap-8 rounded-lg md:flex-row">
			<div className="flex flex-col items-center justify-center w-full gap-14">
				<img className="w-60 lg:w-72" src={require('@/images/logo.png')} alt="" />

				<div className="flex flex-col items-center w-full gap-4 md:gap-8 md:justify-center md:flex-row">
					<Button
						label="Bacakan Untukku"
						className="w-full md:w-56"
						size="xl"
						onClick={() => handleOpenBook(READING_MODE.READ_ALOUD)}
					/>
					<Button
						label="Baca Sendiri"
						className="w-full md:w-56"
						size="xl"
						onClick={() => handleOpenBook(READING_MODE.READ_BY_MYSELF)}
					/>
				</div>
			</div>
		</Fade>
	);
};
