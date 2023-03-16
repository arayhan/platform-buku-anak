import React from 'react';

export const Background = () => {
	return (
		<img
			className="absolute top-0 left-0 object-cover w-full h-full opacity-50 -z-10"
			src={require('@/images/background.jpg')}
			alt=""
		/>
	);
};
