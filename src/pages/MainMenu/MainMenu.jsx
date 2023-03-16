import { ButtonIcon } from '@/components/atoms';
import React from 'react';

export const MainMenu = () => {
	return (
		<div className="h-screen max-h-screen overflow-hidden">
			<img
				className="absolute top-0 left-0 object-cover w-full h-full opacity-50 -z-10"
				src={require('@/images/background.jpg')}
				alt=""
			/>

			<div className="container relative flex flex-col items-center justify-center h-full max-w-screen-xl gap-12 mx-auto top-5">
				<div className="flex items-center justify-center w-full gap-10 rounded-lg">
					<div className="relative w-full">
						<img className="z-0 mx-auto rounded-lg shadow-xl" src={require('@/images/cover.jpg')} alt="" />
					</div>

					<div className="flex flex-col items-center justify-center w-full gap-10">
						<img className="w-96" src={require('@/images/logo.png')} alt="" />

						<div className="flex items-center justify-center w-full gap-3">
							<ButtonIcon icon={require('@/images/symbol/start.png')} />
						</div>
					</div>
				</div>
			</div>

			<div className="absolute bottom-5 right-8">
				<div className="flex items-center justify-center">
					<ButtonIcon icon={require('@/images/symbol/music.png')} className={'w-12'} />
				</div>
			</div>
		</div>
	);
};
