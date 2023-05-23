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
					<img src={require('@/images/quiz.avif')} alt="" className="w-64 rounded-lg shadow-md lg:w-80" />
					<Button label="Kerjakan Kuis" className="w-56" size="xl" onClick={() => navigate('/quiz')} />
					<hr />
					<div className="flex flex-col items-center gap-2 mt-10 md:gap-8 md:flex-row md:mt-5">
						<Button label="Glosarium" className="w-56" size="xl" onClick={() => navigate('/glossary')} />
						<Button label="Tentang Kreator" className="w-56" size="xl" onClick={() => navigate('/author')} />
					</div>
				</div>
			</div>
		</Fade>
	);
};
