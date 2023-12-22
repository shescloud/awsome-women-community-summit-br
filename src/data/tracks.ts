export type Talk = {
	from: string;
	to: string;
	title: string;
	isTalk: boolean;
	speaker?: {
		name: string;
		role: string;
		avatar: string;
		link: string;
	};
};

export type Schedule = {
	name: string;
	slug: string;
	schedule: Talk[];
};

const schedules: Schedule[] = [
	{
		name: 'Iniciante',
		slug: 'iniciante',
		schedule: [
			{
				from: '08:00',
				to: '09:00',
				title: 'Credenciamento | Networking | Café de Boas Vindas',
				isTalk: false,
			},
			{
				from: '09:00',
				to: '09:30',
				title: 'ABERTURA',
				isTalk: false,
			},
			{
				from: '09:30',
				to: '10:30',
				title: 'KEYNOTE DE ABERTURA - JORNADA DE LIDERANÇA DE ENGENHARIA',
				isTalk: true,
				speaker: {
					name: 'Gabriela Dias',
					role: 'Diretora de Engenharia na Unico IDTech',
					avatar: '/images/vols/ana.jpg',
					link: 'https://www.linkedin.com/in/gabrieladias/',
				},
			},
			{
				from: '10:30',
				to: '10:45',
				title: 'BREAK E NETWORKING',
				isTalk: false,
			},
			{
				from: '10:45',
				to: '11:30',
				title: 'FERRAMENTAS QUE IRÃO TE AJUDAR A ENTRAR NO MUNDO DE DEVOPS/CLOUD',
				isTalk: true,
				speaker: {
					name: 'Ismael Ash',
					role: 'Consultor TI |Senior Software Developer | React.js | Node.js | .Net Core | AWS | GCP | Unity | Mentor | MBA',
					avatar: '/images/vols/ana.jpg',
					link: 'https://www.linkedin.com/in/ismaelash/',
				},
			},
			{
				from: '11:30',
				to: '12:15',
				title: 'S3 STORAGE LENS: VISIBILIDADE DE DADOS E OTIMIZAÇÃO DE CUSTOS',
				isTalk: true,
				speaker: {
					name: 'Bruno Marangoni',
					role: 'Solutions Architect @ DXC Technology | Cloud Solution Architect | AWS | Hybrid Cloud | Azure | VMware | AWS Community Builder',
					avatar: '/images/vols/ana.jpg',
					link: 'https://www.linkedin.com/in/brunomarangoni/',
				},
			},
			{
				from: '12:15',
				to: '14:00',
				title: 'ALMOÇO',
				isTalk: false,
			},
			{
				from: '14:00',
				to: '14:45',
				title: 'CONSTRUINDO ESTRADAS E PONTES EM UMA DÉCADA DE COMPUTAÇÃO EM NUVEM',
				isTalk: true,
				speaker: {
					name: 'Heitor Lessa',
					role: 'Principal Architect at Amazon Web Services',
					avatar: '/images/vols/ana.jpg',
					link: 'https://www.linkedin.com/in/heitor-lessa/',
				},
			},
			{
				from: '14:45',
				to: '15:30',
				title: 'A IMPORTÂNCIA DE FINOPS NA MIGRAÇÃO PARA A NUVEM',
				isTalk: true,
				speaker: {
					name: 'Jéssica Cardozo',
					role: 'Cloud Specialist na Darede | FinOps | Cloud Cost Optimization | Mentora de Carreira e Fundadora do Projeto Cloud Women',
					avatar: '/images/vols/ana.jpg',
					link: 'https://www.linkedin.com/in/jessicacardozo/',
				},
			},
			{
				from: '15:30',
				to: '15:45',
				title: 'BREAK E NETWORKING',
				isTalk: false,
			},
			{
				from: '15:45',
				to: '16:30',
				title: 'DESCOBRINDO E DESVENDANDO O AMAZON VPC LATTICE',
				isTalk: true,
				speaker: {
					name: 'Carlos Augusto Souza Carvalho',
					role: 'Cloud Architect at Claro Brasil - Microsoft MCT | 20x Azure | 9x AWS | 2x GCP | 6x Oracle Cloud | 3x Fortinet NSE | 1x Aviatrix | Lifelong Learner | Cloud Computing Mentor',
					avatar: '/images/vols/ana.jpg',
					link: 'https://www.linkedin.com/in/carlosaugustocarvalho/',
				},
			},
			{
				from: '16:30',
				to: '17:15',
				title: 'O QUE É IAC & IAC NA PRÁTICA COM TERRAFORM',
				isTalk: true,
				speaker: {
					name: 'Maria Eduarda Lombardi',
					role: 'DevOps Jr. at Darede l 3x AWS Certified l 3x HashiCorp Certified l Vault Associate Certified l Terraform Associate Certified & Terraform CHIP Certified',
					avatar: '/images/vols/ana.jpg',
					link: 'https://www.linkedin.com/in/mariaeduardalombardi/',
				},
			},
			{
				from: '17:15',
				to: '18:15',
				title: 'KEYNOTE DE ENCERRAMENTO',
				isTalk: true,
				speaker: {
					name: 'Jota Sousa',
					role: 'Cloud Architecture Manager | FinOps | Cloud Operations Manager | Cloud Excellence | Infraestrutura de TI | DevOps | Projetos |',
					avatar: '/images/vols/ana.jpg',
					link: 'https://www.linkedin.com/in/jotadesousa/',
				},
			},
			{
				from: '18:15',
				to: '18:45',
				title: 'SORTEIOS E ENCERRAMENTO',
				isTalk: false,
			},
			{
				from: '18:45',
				to: '20:00',
				title: 'HAPPY HOUR',
				isTalk: false,
			},
		],
	},
	{
		name: 'Intermediário e Avançado',
		slug: 'intermediario-e-avancado',
		schedule: [
			{
				from: '08:00',
				to: '09:00',
				title: 'Credenciamento | Networking | Café de Boas Vindas',
				isTalk: false,
			},
			{
				from: '09:00',
				to: '09:30',
				title: 'ABERTURA',
				isTalk: false,
			},
			{
				from: '09:30',
				to: '10:30',
				title: 'KEYNOTE DE ABERTURA - JORNADA DE LIDERANÇA DE ENGENHARIA',
				isTalk: true,
				speaker: {
					name: 'Gabriela Dias',
					role: 'Diretora de Engenharia na Unico IDTech',
					avatar: '/images/vols/ana.jpg',
					link: 'https://www.linkedin.com/in/gabrieladias/',
				},
			},
			{
				from: '10:30',
				to: '10:45',
				title: 'BREAK E NETWORKING',
				isTalk: false,
			},
			{
				from: '10:45',
				to: '11:30',
				title: 'FERRAMENTAS QUE IRÃO TE AJUDAR A ENTRAR NO MUNDO DE DEVOPS/CLOUD',
				isTalk: true,
				speaker: {
					name: 'Ismael Ash',
					role: 'Consultor TI |Senior Software Developer | React.js | Node.js | .Net Core | AWS | GCP | Unity | Mentor | MBA',
					avatar: '/images/vols/ana.jpg',
					link: 'https://www.linkedin.com/in/ismaelash/',
				},
			},
			{
				from: '11:30',
				to: '12:15',
				title: 'S3 STORAGE LENS: VISIBILIDADE DE DADOS E OTIMIZAÇÃO DE CUSTOS',
				isTalk: true,
				speaker: {
					name: 'Bruno Marangoni',
					role: 'Solutions Architect @ DXC Technology | Cloud Solution Architect | AWS | Hybrid Cloud | Azure | VMware | AWS Community Builder',
					avatar: '/images/vols/ana.jpg',
					link: 'https://www.linkedin.com/in/brunomarangoni/',
				},
			},
			{
				from: '12:15',
				to: '14:00',
				title: 'ALMOÇO',
				isTalk: false,
			},
			{
				from: '14:00',
				to: '14:45',
				title: 'CONSTRUINDO ESTRADAS E PONTES EM UMA DÉCADA DE COMPUTAÇÃO EM NUVEM',
				isTalk: true,
				speaker: {
					name: 'Heitor Lessa',
					role: 'Principal Architect at Amazon Web Services',
					avatar: '/images/vols/ana.jpg',
					link: 'https://www.linkedin.com/in/heitor-lessa/',
				},
			},
			{
				from: '14:45',
				to: '15:30',
				title: 'A IMPORTÂNCIA DE FINOPS NA MIGRAÇÃO PARA A NUVEM',
				isTalk: true,
				speaker: {
					name: 'Jéssica Cardozo',
					role: 'Cloud Specialist na Darede | FinOps | Cloud Cost Optimization | Mentora de Carreira e Fundadora do Projeto Cloud Women',
					avatar: '/images/vols/ana.jpg',
					link: 'https://www.linkedin.com/in/jessicacardozo/',
				},
			},
			{
				from: '15:30',
				to: '15:45',
				title: 'BREAK E NETWORKING',
				isTalk: false,
			},
			{
				from: '15:45',
				to: '16:30',
				title: 'DESCOBRINDO E DESVENDANDO O AMAZON VPC LATTICE',
				isTalk: true,
				speaker: {
					name: 'Carlos Augusto Souza Carvalho',
					role: 'Cloud Architect at Claro Brasil - Microsoft MCT | 20x Azure | 9x AWS | 2x GCP | 6x Oracle Cloud | 3x Fortinet NSE | 1x Aviatrix | Lifelong Learner | Cloud Computing Mentor',
					avatar: '/images/vols/ana.jpg',
					link: 'https://www.linkedin.com/in/carlosaugustocarvalho/',
				},
			},
			{
				from: '16:30',
				to: '17:15',
				title: 'O QUE É IAC & IAC NA PRÁTICA COM TERRAFORM',
				isTalk: true,
				speaker: {
					name: 'Maria Eduarda Lombardi',
					role: 'DevOps Jr. at Darede l 3x AWS Certified l 3x HashiCorp Certified l Vault Associate Certified l Terraform Associate Certified & Terraform CHIP Certified',
					avatar: '/images/vols/ana.jpg',
					link: 'https://www.linkedin.com/in/mariaeduardalombardi/',
				},
			},
			{
				from: '17:15',
				to: '18:15',
				title: 'KEYNOTE DE ENCERRAMENTO',
				isTalk: true,
				speaker: {
					name: 'Jota Sousa',
					role: 'Cloud Architecture Manager | FinOps | Cloud Operations Manager | Cloud Excellence | Infraestrutura de TI | DevOps | Projetos |',
					avatar: '/images/vols/ana.jpg',
					link: 'https://www.linkedin.com/in/jotadesousa/',
				},
			},
			{
				from: '18:15',
				to: '18:45',
				title: 'SORTEIOS E ENCERRAMENTO',
				isTalk: false,
			},
			{
				from: '18:45',
				to: '20:00',
				title: 'HAPPY HOUR',
				isTalk: false,
			},
		],
	},
	{
		name: 'Carreira',
		slug: 'carreira',
		schedule: [
			{
				from: '08:00',
				to: '09:00',
				title: 'Credenciamento | Networking | Café de Boas Vindas',
				isTalk: false,
			},
			{
				from: '09:00',
				to: '09:30',
				title: 'ABERTURA',
				isTalk: false,
			},
			{
				from: '09:30',
				to: '10:30',
				title: 'KEYNOTE DE ABERTURA - JORNADA DE LIDERANÇA DE ENGENHARIA',
				isTalk: true,
				speaker: {
					name: 'Gabriela Dias',
					role: 'Diretora de Engenharia na Unico IDTech',
					avatar: '/images/vols/ana.jpg',
					link: 'https://www.linkedin.com/in/gabrieladias/',
				},
			},
			{
				from: '10:30',
				to: '10:45',
				title: 'BREAK E NETWORKING',
				isTalk: false,
			},
			{
				from: '10:45',
				to: '11:30',
				title: 'FERRAMENTAS QUE IRÃO TE AJUDAR A ENTRAR NO MUNDO DE DEVOPS/CLOUD',
				isTalk: true,
				speaker: {
					name: 'Ismael Ash',
					role: 'Consultor TI |Senior Software Developer | React.js | Node.js | .Net Core | AWS | GCP | Unity | Mentor | MBA',
					avatar: '/images/vols/ana.jpg',
					link: 'https://www.linkedin.com/in/ismaelash/',
				},
			},
			{
				from: '11:30',
				to: '12:15',
				title: 'S3 STORAGE LENS: VISIBILIDADE DE DADOS E OTIMIZAÇÃO DE CUSTOS',
				isTalk: true,
				speaker: {
					name: 'Bruno Marangoni',
					role: 'Solutions Architect @ DXC Technology | Cloud Solution Architect | AWS | Hybrid Cloud | Azure | VMware | AWS Community Builder',
					avatar: '/images/vols/ana.jpg',
					link: 'https://www.linkedin.com/in/brunomarangoni/',
				},
			},
			{
				from: '12:15',
				to: '14:00',
				title: 'ALMOÇO',
				isTalk: false,
			},
			{
				from: '14:00',
				to: '14:45',
				title: 'CONSTRUINDO ESTRADAS E PONTES EM UMA DÉCADA DE COMPUTAÇÃO EM NUVEM',
				isTalk: true,
				speaker: {
					name: 'Heitor Lessa',
					role: 'Principal Architect at Amazon Web Services',
					avatar: '/images/vols/ana.jpg',
					link: 'https://www.linkedin.com/in/heitor-lessa/',
				},
			},
			{
				from: '14:45',
				to: '15:30',
				title: 'A IMPORTÂNCIA DE FINOPS NA MIGRAÇÃO PARA A NUVEM',
				isTalk: true,
				speaker: {
					name: 'Jéssica Cardozo',
					role: 'Cloud Specialist na Darede | FinOps | Cloud Cost Optimization | Mentora de Carreira e Fundadora do Projeto Cloud Women',
					avatar: '/images/vols/ana.jpg',
					link: 'https://www.linkedin.com/in/jessicacardozo/',
				},
			},
			{
				from: '15:30',
				to: '15:45',
				title: 'BREAK E NETWORKING',
				isTalk: false,
			},
			{
				from: '15:45',
				to: '16:30',
				title: 'DESCOBRINDO E DESVENDANDO O AMAZON VPC LATTICE',
				isTalk: true,
				speaker: {
					name: 'Carlos Augusto Souza Carvalho',
					role: 'Cloud Architect at Claro Brasil - Microsoft MCT | 20x Azure | 9x AWS | 2x GCP | 6x Oracle Cloud | 3x Fortinet NSE | 1x Aviatrix | Lifelong Learner | Cloud Computing Mentor',
					avatar: '/images/vols/ana.jpg',
					link: 'https://www.linkedin.com/in/carlosaugustocarvalho/',
				},
			},
			{
				from: '16:30',
				to: '17:15',
				title: 'O QUE É IAC & IAC NA PRÁTICA COM TERRAFORM',
				isTalk: true,
				speaker: {
					name: 'Maria Eduarda Lombardi',
					role: 'DevOps Jr. at Darede l 3x AWS Certified l 3x HashiCorp Certified l Vault Associate Certified l Terraform Associate Certified & Terraform CHIP Certified',
					avatar: '/images/vols/ana.jpg',
					link: 'https://www.linkedin.com/in/mariaeduardalombardi/',
				},
			},
			{
				from: '17:15',
				to: '18:15',
				title: 'KEYNOTE DE ENCERRAMENTO',
				isTalk: true,
				speaker: {
					name: 'Jota Sousa',
					role: 'Cloud Architecture Manager | FinOps | Cloud Operations Manager | Cloud Excellence | Infraestrutura de TI | DevOps | Projetos |',
					avatar: '/images/vols/ana.jpg',
					link: 'https://www.linkedin.com/in/jotadesousa/',
				},
			},
			{
				from: '18:15',
				to: '18:45',
				title: 'SORTEIOS E ENCERRAMENTO',
				isTalk: false,
			},
			{
				from: '18:45',
				to: '20:00',
				title: 'HAPPY HOUR',
				isTalk: false,
			},
		],
	},
];

export default schedules;
