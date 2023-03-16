import React from 'react';

export const MainMenu = () => {
	return (
		<div className="h-screen max-h-screen overflow-hidden">
			<img
				className="absolute top-0 left-0 object-cover w-full h-full opacity-50 -z-10"
				src={require('@/images/background.jpg')}
				alt=""
			/>

			<div className="container flex items-center justify-center h-full max-w-screen-xl mx-auto">
				<div className="h-[90vh] bg-white rounded-lg overflow-hidden">
					<img className="h-full mx-auto" src={require('@/images/cover.jpg')} alt="" />
				</div>
			</div>
		</div>
	);
};
