const normalizeText = (text) => text
	.replace(/&quot;/g, '"')
	.replace(/&#39;/g, "'")
	.replace(/&amp;/g, '&')
	.replace(/&lt;/g, '<')
	.replace(/&gt;/g, '>')
	.replace(/&le;/g, '≤')
	.replace(/&ge;/g, '≥');
	

export default normalizeText;