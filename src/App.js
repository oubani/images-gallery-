import React, { useState, useEffect } from 'react';
import './assets/main.css';
import './assets/style.css';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';
import Pagination from './components/Pagination';

function App() {
	const [images, imagesSet] = useState([]);
	const [isLoading, isLoadingSet] = useState(true);
	const [term, termSet] = useState('');
	const [order, orderSet] = useState('popular');
	const [imagesPerPage, imagesPerPageSet] = useState(20);
	const [page, pageSet] = useState(1);
	const [totalImages, totalImagesSet] = useState(null);

	const handleOrderChange = (orderBy) => {
		orderSet(orderBy);
	};
	const handleImagesPerPage = (number) => {
		imagesPerPageSet(number);
	};

	const choosePage = async (pageChosen) => {
		await pageSet(pageChosen);
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	useEffect(() => {
		isLoadingSet(false);
		fetch(`https://pixabay.com/api/
		?key=${process.env.REACT_APP_PIXABAY_API_KEY}
		&q=${term}&image_type=illustration
		&pretty=true&order=${order}
		&per_page=${imagesPerPage}
		&page=${page}
    `)
			.then((res) => res.json())
			.then((data) => {
				isLoadingSet(false);
				imagesSet(data.hits);
				totalImagesSet(data.totalHits);
			})
			.catch((err) => {
				isLoadingSet(false);
				console.log(err);
			});
	}, [term, order, imagesPerPage, page]);

	return (
		<div className='container mx-auto'>
			<ImageSearch
				searchText={(text) => termSet(text)}
				handleOrderChange={handleOrderChange}
				order={order}
				handleImagesPerPage={handleImagesPerPage}
			/>
			{images.length > 0 && (
				<Pagination
					total={totalImages}
					page={page}
					choosePage={choosePage}
					imagesPerPage={imagesPerPage}
				/>
			)}
			{!isLoading && images.length === 0 && (
				<h1 className='text-5xl text-center mx-auto mt-32'>No Images Found</h1>
			)}
			{isLoading ? (
				<h1 className='text-6xl text-center mx-auto mt-32'>Loading</h1>
			) : (
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
					{images.map((image) => (
						<ImageCard key={image.id} image={image} />
					))}
				</div>
			)}
			<Pagination
				total={totalImages}
				page={page}
				choosePage={choosePage}
				imagesPerPage={imagesPerPage}
			/>
		</div>
	);
}

export default App;
