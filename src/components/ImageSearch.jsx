import React, { useState } from 'react';

const ImageSearch = ({
	searchText,
	handleOrderChange,
	order,
	handleImagesPerPage,
}) => {
	const [text, textSet] = useState('');

	// handleSubmut
	const handleSubmit = (e) => {
		e.preventDefault();
		searchText(text);
	};

	const handleNChange = (e) => {
		console.log(e.target.value);
		handleOrderChange(e.target.value);
	};
	const HandleItemPerPage = (e) => {
		console.log(e.target.value);
		handleImagesPerPage(e.target.value);
	};

	return (
		<div className='max-w-md rounded overflow-hidden my-10 mx-auto bg-gray-100 py-4  '>
			<form className='w-full mx-auto max-w-sm' onSubmit={handleSubmit}>
				<div className='flex items-center py-2 '>
					<input
						value={text}
						onChange={(e) => textSet(e.target.value)}
						type='text'
						placeholder='Search for Image'
						className='appearance-none bg-transparent border-b-2 border-teal-500 w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
					/>
					<button
						type='submit'
						className='flex-shrink-0 bg-green-400 hover:bg-green-700  border-teal-500  hover:border-green-700 text-sm border-2 text-white py-1 px-2 rounded '>
						Search
					</button>
				</div>

				<div className='flex items-center justify-between'>
					<div className='flex items-center justify-between'>
						<label htmlFor=''>Order By : </label>
						<div className='relative'>
							<select
								onChange={handleNChange}
								className='block appearance-none w-full  text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
								id='grid-state'>
								<option
									value='popular'
									defaultValue={order === 'popular' ? true : false}>
									Popular
								</option>
								<option
									value='latest'
									defaultValue={order === 'latest' ? true : false}>
									Latest
								</option>
							</select>
							<div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
								<svg
									className='fill-current h-4 w-4'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 20 20'>
									pâzeaaazµ
									<path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
								</svg>
							</div>
						</div>
					</div>

					<div className='flex items-center  '>
						<label htmlFor=''>Images Per Page : </label>
						<div className='relative'>
							<select
								onChange={HandleItemPerPage}
								className='block appearance-none w-full  text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
								id='grid-state'>
								<option value={20} defaultValue={order === 20 ? true : false}>
									20
								</option>
								<option value={30} defaultValue={order === 30 ? true : false}>
									30
								</option>
								<option value={50} defaultValue={order === 50 ? true : false}>
									50
								</option>
							</select>
							<div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
								<svg
									className='fill-current h-4 w-4'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 20 20'>
									<path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
								</svg>
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default ImageSearch;
