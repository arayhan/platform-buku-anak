import React from 'react';
import { TbCapture } from 'react-icons/tb';
import { ButtonIcon } from '../atoms';
import html2canvas from 'html2canvas';

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
			className="p-2 text-white rounded-lg cursor-pointer bg-app-carmine-pink"
			onClick={() => exportAsImage(exportRef.current, 'test')}
		>
			<TbCapture size={32} />
		</ButtonIcon>
	);
};
