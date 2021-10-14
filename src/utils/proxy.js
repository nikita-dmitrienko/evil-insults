const addProxy = (url) => {
	const urlWithProxy = new URL(
	  '/get',
	  'https://hexlet-allorigins.herokuapp.com',
	);
	urlWithProxy.searchParams.set('url', url);
	urlWithProxy.searchParams.set('disableCache', true);
	return urlWithProxy.toString();
};
  
export default addProxy;