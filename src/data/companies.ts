export type CompanyData = {
	link: string;
	image: string;
	name: string;
};

const companiesData: CompanyData[] = [
	{
		link: 'https://aws.amazon.com/',
		image: '/images/empresas/aws.png',
		name: 'Amazon Web Services',
	},
	{
		link: 'https://www.linuxtips.io/home',
		image: '/images/empresas/LINUXtips.jpg',
		name: 'LINUXtips',
	},
	{
		link: 'https://novatec.com.br/',
		image: '/images/empresas/novatec.png',
		name: 'Editora Novatec',
	},
	{
		link: 'https://www.jetbrains.com/pt-br/',
		image: '/images/empresas/jetbrains.png',
		name: 'JetBrains',
	},
	{
		link: 'https://www.meteor.com/',
		image: '/images/empresas/meteor.png',
		name: 'Meteor',
	},
];


export default companiesData;
