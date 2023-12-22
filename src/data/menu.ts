export type MenuDataItem = {
	title: boolean;
	text: string;
	link: string;
	external: boolean;
	dropdown?: MenuDataItem[];
};

const menuValues: MenuDataItem[] = [
	{
		"title": true,
		"text": "Inscrições abertas",
		"link": "https://www.sympla.com.br/evento/awsome-women-community-summit-brasil/2267788?referrer=www.awswomencommunitybrasil.com",
		"external": true,
	},
	{
		"title": false,
		"text": "Sobre o evento",
		// "text": "Sobre o AWSome Women Community Summit Brasil",
		"link": "/#about",
		"external": false,
	},
	{
		"title": false,
		"text": "Conteúdo",
		"link": "/#content",
		"external": false,
	},
	{
		"title": false,
		"text": "Comunidades Apoiadoras",
		"link": "/#communities",
		"external": false,
	},
	{
		"title": false,
		"text": "Organizadoras",
		"link": "/#organizers",
		"external": false,
	},
	{
		"title": false,
		"text": "Código de conduta",
		"link": "/codigo-de-conduta",
		"external": false,
	},
];


export default menuValues;
