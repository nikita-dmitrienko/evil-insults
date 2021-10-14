import { useEffect, useState } from 'react';
import getInsult from '../utils/get-insult';

const addProxy = (url) => {
	const urlWithProxy = new URL(
	  '/get',
	  'https://hexlet-allorigins.herokuapp.com',
	);
	urlWithProxy.searchParams.set('url', url);
	urlWithProxy.searchParams.set('disableCache', true);
	return urlWithProxy.toString();
  };

const Insult = () => {
	const [joke, setJoke] = useState('');
	const url = 'https://evilinsult.com/generate_insult.php';
	const proxyUrl = addProxy(url);

	useEffect(() => getInsult().then((insult) => setJoke(insult)), [joke, proxyUrl]);
	
	const handleClick = () => {
		getInsult().then((insult) => setJoke(insult));
	};
	
	return (
		<>
			<p className="text-gray-400 mt-5 text-lg">{joke}</p>
			<button className="p-4 bg-green-600 rounded-lg font-bold text-white mt-5 hover:bg-gray-600"
				onClick={handleClick}>
				More 🚀
			</button>
		</>
	);
	
};

export default Insult;