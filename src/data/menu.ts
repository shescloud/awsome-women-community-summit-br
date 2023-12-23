import moment from 'moment';
import reject from 'lodash/reject';
import tracks from '@/data/tracks';

export type MenuDataItem = {
	title: boolean;
	text: string;
	link: string;
	external: boolean;
	disabled?: boolean;
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
		"text": "Trilhas",
		"link": "/#tracks",
		"external": false,
		"disabled": moment().isBefore('2023-01-15'),
		"dropdown": tracks.map((track) => ({
			"title": false,
			"text": track.name,
			"link": `/trilhas/${track.slug}`,
			"external": false,
		})),
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


export default reject(menuValues, { disabled: true });
