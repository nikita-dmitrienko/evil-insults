import addProxy from './proxy';

const insultUrl = 'https://evilinsult.com/generate_insult.php?lang=en&type=json';
const proxyUrl = addProxy(insultUrl);

const getInsult = () => fetch(proxyUrl)
	.then((response) => response.json())
	.then((data) => {
		const parsedData = JSON.parse(data.contents);
		const { insult } = parsedData;
		return insult;
	})
	.catch((e) => new Error(e));

export default getInsult;
