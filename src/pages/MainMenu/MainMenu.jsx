import { ButtonIcon } from '@/components/atoms';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Fade } from '@/transitions/Fade/Fade';

export const MainMenu = () => {
	const navigate = useNavigate();
	return (
		<Fade className="flex items-center justify-center w-full h-screen gap-8 rounded-lg">
			<div className="relative w-1/2">
				<img className="z-0 mx-auto rounded-lg shadow-xl w-[80%]" src={require('@/images/cover.jpg')} alt="" />
			</div>

			<div className="flex flex-col items-center justify-center gap-10">
				<img className="w-72" src={require('@/images/logo.png')} alt="" />

				<div className="flex items-center justify-center w-40 gap-3">
					<ButtonIcon className="w-28" icon={require('@/images/symbol/start.png')} onClick={() => navigate('/book')} />
				</div>
			</div>
		</Fade>
	);
};
