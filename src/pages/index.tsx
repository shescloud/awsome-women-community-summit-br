import React, { useState, useEffect } from 'react';
import { Box, styled } from '@mui/system';

import InformationCard from '@/components/information-card';
import TextPanel from '@/components/text-panel';
import Reference from '@/components/reference';
import Section from '@/components/section';
import Button from '@/components/button';

const StyledDiv = styled('div')``;
const StyledImg = styled('img')``;

export default function Home() {
	const [opacity, setOpacity] = useState(0);
	const [menuFixed, setMenuFixed] = useState(false);

	const headerHeight = 100;

	const handleScroll = () => {
		const newOpacity = Math.min(window.scrollY / window.innerHeight / 1.3, 1);
		setOpacity(newOpacity);

		setMenuFixed(window.scrollY > (window.innerHeight - headerHeight));
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

  return (
		<>
			<Section
				sectionSx={{
					backgroundColor: '#F6EAFA',
					padding: 0,
					height: {
						xs: '100vh',
						lg: `calc(100vh - ${headerHeight}px)`,
					},
					marginBottom: {
						xs: 0,
						lg: menuFixed ? `${headerHeight}px` : 0,
					},
				}}
			>
				<StyledDiv
					style={{ opacity }}
					sx={{
						display: {
							xs: 'none',
							lg: 'inline-flex',
						},
						position: 'absolute',
						top: 0,
						left: 0,
						width: '100%',
						height: '100%',
						backgroundColor: 'black',
						zIndex: 2,
					}}
				/>
				<StyledImg
					src="/images/logo.png"
					sx={{
						maxHeight: 'calc(100vh - 100px)',
						margin: '0 auto',
						flex: 1,
					}}
				/>
			</Section>
			<StyledDiv
				sx={{
					display: {
						xs: 'none',
						lg: 'inline-flex'
					},
					width: '100%',
					height: headerHeight,
					backgroundColor: 'black',
					zIndex: 2,
					...(
						menuFixed
							? {
								position: 'fixed',
								top: 0,
								left: 0,
								zIndex: 999,
								marginBottom: '5em'
							}
							: {}
					)
				}}
			>

			</StyledDiv>
			<Section
				sectionSx={{ backgroundColor: '#EEEEEE', padding: { xs: '1em 0', lg: '5em 2em' } }}
				sx={{
					display: 'flex',
					flexDirection: {
						xs: 'column',
						lg: 'row',
					},
					alignItems: 'center',
					width: {
						xs: '100%',
					},
				}}
			>
				<TextPanel
					primary={true}
					title={'Quem somos?'}
					sx={{
						boxShadow: {
							xs: '0 4px 20px 0 rgba(0, 0, 0, 0.14), 0 0px 10px -5px rgba(0, 0, 0, 0.4)',
							lg: '0 4px 20px 0 rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(0, 0, 0, 0.4)'
						},
						position: 'relative',
						textIndent: '2em',
						textAlign: 'justify',
						zIndex: 2,
						padding: {
							xs: '1rem',
						},
						width: {
							xs: '100%',
							lg: '40%'
						},
						'p:not(:first-of-type)': {
							margin: '1rem 0',
						}
					}}
				>
					<StyledDiv
						sx={{
							position: 'absolute',
							backgroundColor: 'white',
							height: '100%',
							width: '150%',
							zIndex: -1,
							top: 0,
							left: 0,
							display: {
								xs: 'none',
								lg: 'inline-flex',
							},
						}}
					/>
					<p>
						O AWSome Women Community Summit é um evento que acontece ao redor do mundo e é organizado pela Comunidade
						ativa (AWS User Groups, AWS Community Builders, AWS Heroes) da Amazon Web Services (AWS). Pela primeira,
						ele acontecerá no Brasil e a cidade que sediara será Belo Horizonte - MG, no dia 09 de março de 2024.
					</p>
					<p>
						O foco é celebrar e capacitar mulheres na tecnologia, particularmente no campo da computação em nuvem,
						ajudando no desenvolvimento técnico, criando uma rede de apoio e trazendo networking. Esperamos promover a
						diversidade e inclusão na tecnologia, quebrar barreiras e paradigmas ajudando a combater a disparidade de
						gênero no campo da tecnologia. Pretendemos também deixar um legado sobre conhecimento tecnológico,
						experimentação e vivência em desenvolvimento de software, computação em nuvem, práticas de cyber segurança
						e principalmente criar e manter um ambiente seguro e focado em educação, inovação e inspiração de mais
						mulheres.
					</p>
					<p>
						Então, se você é daquelas que codam, gerenciam projetos, analisam dados ou qualquer outra coisa incrível
						na AWS, ou se você é simplesmente curiosa e quer aprender mais, saiba que você encontrou o seu lugar.
						Aqui, a gente valoriza cada história, cada trajetória e acredita no poder da união feminina!
					</p>
					<p>
						Vamos juntas nessa jornada incrível? Porque a gente sabe: juntas, somos mais fortes, mais sábias e
						infinitamente mais AWSome!
					</p>
				</TextPanel>
				<TextPanel
					primary={false}
					title={'O que esperar?'}
					sx={{
						boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(0, 0, 0, 0.4)',
						padding: '2rem',
						margin: {
							xs: '1rem 0',
							lg: '10rem 0 3rem'
						},
						zIndex: 2,
						width: {
							xs: '100%',
							lg: '60%'
						},
						li: {
							textAlign: 'justify',
							listStyleType: 'circle',
							'.content': {
								textAlign: 'justify',
							},
						},
						'li:not(:first-of-type)': {
							margin: '1.5rem 0',
						},
					}}
				>
					<ul >
						<li>
							Renove e revitalize seus conhecimentos em cloud computing, tópicos em altas de tecnologia e muito sobre AWS
						</li>
						<li>
							Vamos trazer mulheres que arrasam no mercado de tecnologia pra contar suas trajetórias, os perrengues, as vitórias e comoelas chegaram lá. É pra sair de lá com aquela dose extra de inspiração!
						</li>
						<li>
							Prontas para workshops e sessões práticas? Você terá a oportunidade de colocar a mão na massa e aprender
							aquelas skills que vão dar um up no currículo. E o melhor: tudo explicadinho e no nosso ritmo.
						</li>
						<li>
							Aqui, pode ser você mesma, tirar dúvidas, compartilhar experiências e saber que tá entre amigas.
							Queremos que todo mundo se sinta à vontade e acolhido
						</li>
						<li>
							Então, se você tá procurando por um lugar pra aprender, se inspirar e fazer amizades incríveis na área
							de Cloud Computing e também aprender muito sobre AWS, acabou de encontrar! Esperamos você no Awesome Women Community Summit. Vamos juntas fazer desse evento algo inesquecível!
						</li>
						<li>
							Se você está em transição de carreira, no início ou ainda não sabe que área escolher dentro de tecnologia, teremos uma trilha de carreiras com mulheres incríveis que vão contar como é o dia a dia delas nas áreas de Cloud/DevOps/SRE, Desenvolvimento de Software Backend, Desenvolvimento de Software Frontend, Diretoria de Tecnologia, Liderança Tecnica, Gestão de Projetos, Securtiy, Inteligência Artificial, UX, Gestão de Pessoas, Testes, QA, Observabilidade, DataCenters, Banco de Dados, Redes de Computadores, Produtos, Agilidade, etc.
						</li>
						<li>
							Amamos brindes! Concorra a brindes como créditos para serem utilizados em sua conta AWS.
						</li>
					</ul>
				</TextPanel>
			</Section>
			<Section title="Reserve seu lugar"  sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: {
							xs: 'repeat(2, 1fr)',
							lg: 'repeat(4, 1fr)',
						},
						gap: 1,
						padding: {
							xs: '1rem',
							lg: '2rem',
						},
					}}
				>
					<InformationCard image={'/images/iniciante.png'} title="Conteúdo iniciante" description="Se você está começando agora ou está em transição de carreira e quer apresentações detalhadas sobre os conceitos básicos de uso dos serviço" />
					<InformationCard image={'/images/moderado.png'} title="Conteúdo moderado" description="Você já é usuário(a) AWS e quer se aprofundar em temas que são úteis para o seu dia a dia e para seu negócio" />
					<InformationCard image={'/images/avancado.png'} title="Conteúdo avançado" description="Você é usuário(a) AWS avançado(a) e está interssado(a) em histórias e casos de uso de empresas que tiram o máximo da nuvem" />
					<InformationCard image={'/images/todos.png'} title="Conteúdo de carreiras" description="O Nosso evento contará com vários conteúdos para ajudar a você as mais diversas áreas no mercado de tecnologia" />
				</Box>
				<Button link='https://www.sympla.com.br/evento/awsome-women-community-summit-brasil/2267788?referrer=www.awswomencommunitybrasil.com'>
					Inscrições Abertas
				</Button>
			</Section>
			<Section title='Submeta sua palestra até 15 de janeiro de 2024' sectionSx={{ backgroundColor: '#EEEEEE' }}>
				<Button link='https://sessionize.com/awsome-women-community-summit-brasil-2024'>
					Envie sua talk
				</Button>
			</Section>
			<Section title="Comunidades apoiadoras" shadowed>
				<Box sx={{
					display: 'flex',
					justifyContent: {
						xs: 'center',
						lg: 'space-around',
					},
					flexWrap: 'wrap',
				}}>
					<Reference sm="lg" md="xl" link="https://www.linkedin.com/company/mulheres-na-nuvem-mg/" image={'/images/comunidades/mulheresnanuvemmg.png'}/>
					<Reference sm="lg" md="xl" link="/" image={'/images/comunidades/mulheresnanuvemsp.png'}/>
					<Reference sm="lg" md="xl" link="https://www.meetup.com/pt-BR/awsusergroupmg/" image={'/images/comunidades/awsugmg.png'}/>
					<Reference sm="lg" md="xl" link="https://www.meetup.com/pt-BR/awsusergroupsp/" image={'/images/comunidades/awsugsp.png'}/>
					<Reference sm="lg" md="xl" link="https://www.meetup.com/pt-BR/aws-user-group-brasilia/" image={'/images/comunidades/awsugbsb.png'}/>
				</Box>
			</Section>
			<Section title="Organizadoras" sectionSx={{ backgroundColor: '#F6EAFA' }}>
				<Box sx={{
					display: 'flex',
					justifyContent: {
						xs: 'space-around',
					},
					flexWrap: 'wrap',
					rowGap: {
						xs: 5,
						lg: 0,
					},
					columnGap: {
						xs: 0,
						md: 1,
					},
				}}>
					<Reference sm="md" link="https://www.linkedin.com/in/nellyandrade/" name="Nelly Andrade" image={'/images/vols/nelly.jpeg'}/>
					<Reference sm="md" link="https://twitter.com/shescloud_" name="Paloma Lataliza" image={'/images/vols/paloma.jpg'}/>
					<Reference sm="md" link="https://www.linkedin.com/in/rafaela-vidotti-5741ba111/" name="Rafaela Vidotti" image={'/images/vols/rafa.jpeg'}/>
					<Reference sm="md" link="https://www.linkedin.com/in/jessicaccoelho/" name="Jéssica Coelho" image={'/images/vols/jess.jpeg'}/>
					<Reference sm="md" link="https://www.linkedin.com/in/luisabrandt/" name="Luisa Brandt" image={'/images/vols/luisa.jpeg'}/>
					<Reference sm="md" link="https://www.linkedin.com/in/priscila-araujo-santos/" name="Priscila Araújo" image={'/images/vols/psant.jpg'}/>
				</Box>
		</Section>
		</>
	);
}
