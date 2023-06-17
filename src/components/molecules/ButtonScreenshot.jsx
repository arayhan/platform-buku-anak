import React from 'react';
import { TbCapture } from 'react-icons/tb';
import { ButtonIcon } from '../atoms';
import html2canvas from 'html2canvas';
import clsx from 'clsx';

export const ButtonScreenshot = ({ exportRef }) => {
	const downloadImage = (blob, fileName) => {
		const fakeLink = window.document.createElement('a');
		fakeLink.style = 'display:none;';
		fakeLink.download = fileName;

		fakeLink.href = blob;

		document.body.appendChild(fakeLink);
		fakeLink.click();
		document.body.removeChild(fakeLink);

		fakeLink.remove();
	};

	const exportAsImage = async (element, imageFileName) => {
		const canvas = await html2canvas(element);
		const image = canvas.toDataURL('image/png', 1.0);
		downloadImage(image, imageFileName);
	};

	return (
		<ButtonIcon
			className={clsx(
				'flex items-center justify-center',
				'w-9 md:w-10 lg:w-11 h-9 md:h-10 lg:h-11 text-sm text-[1.8em]',
				'text-white rounded-lg cursor-pointer bg-app-carmine-pink'
			)}
			onClick={() => exportAsImage(exportRef.current, 'pensil-baru-habil')}
		>
			<TbCapture />
		</ButtonIcon>
	);
};
