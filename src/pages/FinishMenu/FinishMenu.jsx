import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Fade } from '@/transitions/Fade/Fade';
import { Button } from '@/components/atoms/Button';

export const FinishMenu = () => {
	const navigate = useNavigate();

	return (
		<Fade className="flex flex-col items-center justify-center w-full h-screen gap-8 rounded-lg md:flex-row">
			<div className="flex flex-col items-center justify-center w-full gap-14">
				<div className="flex flex-col items-center w-full gap-4 md:gap-8">
					<Button label="Quiz" className="w-full md:w-56" size="xl" onClick={() => navigate('/quiz')} />
					<Button label="Glosarium" className="w-full md:w-56" size="xl" onClick={() => navigate('/glossary')} />
					<Button label="Author" className="w-full md:w-56" size="xl" onClick={() => navigate('/author')} />
				</div>
			</div>
		</Fade>
	);
};
