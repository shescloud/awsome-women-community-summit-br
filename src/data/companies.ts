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
		link: 'https://novatec.com.br/',
		image: '/images/empresas/novatec.png',
		name: 'Editora Novatec',
	},
	{
		link: 'https://www.jetbrains.com/pt-br/',
		image: '/images/empresas/jetbrains.png',
		name: 'JetBrains',
	},
];


export default companiesData;
