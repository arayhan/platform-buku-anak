import { ButtonIcon } from '@/components/atoms';
import React from 'react';

export const MainMenu = ({ onClickStart }) => {
	return (
		<div className="flex items-center justify-center w-full gap-10 rounded-lg">
			<div className="relative w-full">
				<img className="z-0 mx-auto rounded-lg shadow-xl" src={require('@/images/cover.jpg')} alt="" />
			</div>

			<div className="flex flex-col items-center justify-center w-full gap-10">
				<img className="w-96" src={require('@/images/logo.png')} alt="" />

				<div className="flex items-center justify-center w-full gap-3">
					<ButtonIcon icon={require('@/images/symbol/start.png')} onClick={onClickStart} />
				</div>
			</div>
		</div>
	);
};
