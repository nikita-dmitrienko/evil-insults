import { useEffect, useState } from 'react';
import getInsult from '../utils/get-insult';
import normalizeText from '../utils/normalize-text';

const Insult = () => {
	const [joke, setJoke] = useState('');

	useEffect(() => getInsult()
		.then((insult) => setJoke(normalizeText(insult))), [joke]);
	
	const handleClick = () => getInsult()
		.then((insult) => setJoke(normalizeText(insult)));
	
	return (
		<>
			<p className="text-black-400 dark:text-gray-400 mt-5 text-lg">{joke}</p>
			<button
				className="p-4 bg-green-600 rounded-lg font-bold text-white mt-5 hover:bg-gray-600"
				onClick={handleClick}
			>
				More 🚀
			</button>
		</>
	);
	
};

export default Insult;