type MenuValue = {
	title: boolean;
	text: string;
	link: string;
};

const menuValues: MenuValue[] = [
	{
		"title": true,
		"text": "Inscrições abertas",
		"link": "https://www.sympla.com.br/evento/awsome-women-community-summit-brasil/2267788?referrer=www.awswomencommunitybrasil.com"
	},
	{
		"title": false,
		"text": "Sobre o AWSome Women Community Summit Brasil",
		"link": "#about",
	},
	{
		"title": false,
		"text": "Comunidades Apoiadoras",
		"link": "#communities",
	},
	{
		"title": false,
		"text": "Conteúdo",
		"link": "#content",
	},
	{
		"title": false,
		"text": "Organizadoras",
		"link": "#organizers",
	},
	{
		"title": false,
		"text": "Código de conduta",
		"link": "https://github.com/shescloud/codigo_de_conduta_AWSome_Women_Community_Summit_Brasil",
	},
];


export default menuValues;
