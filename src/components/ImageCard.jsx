import React from 'react';
import { FaDownload, FaEye, FaThumbsUp } from 'react-icons/fa';

const ImageCard = ({ image }) => {
	const tags = image.tags.split(',');

	return (
		<div className='max-w-sm rounded bg-gray-50 overflow-hidden shadow-lg mx-auto '>
			<div className='flex justify-items-start items-center py-4 px-2 '>
				<img
					className='w-10 h-10 mr-2 rounded-full '
					src={image.userImageURL}
					alt={image.user}
				/>
				<h2 className='text-xl'>{image.user}</h2>
			</div>
			<a href={image.pageURL} target='_blank' rel='noreferrer'>
				<img src={image.webformatURL} alt='img' className='w-full' />
			</a>
			<div className='px-6 py-4'>
				<ul className='flex items-center justify-between  '>
					<li className='flex items-center justify-center flex-1 '>
						<FaEye />
						<strong className='ml-2'>{image.views}</strong>
					</li>
					<li className='flex items-center justify-center border-l-2 border-r-2 border-solid border-gray-600 flex-1 '>
						<FaDownload />
						<strong className='ml-2'>{image.downloads}</strong>
					</li>
					<li className='flex items-center justify-center flex-1'>
						<FaThumbsUp />
						<strong className='ml-2'>{image.likes}</strong>
					</li>
				</ul>
			</div>
			<div className='px-6 py-4'>
				{tags.map((tag) => (
					<span
						key={tag}
						className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 '>
						#{tag}
					</span>
				))}
			</div>
		</div>
	);
};

export default ImageCard;
