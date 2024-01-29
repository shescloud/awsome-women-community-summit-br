import React, { useState, useEffect } from 'react';
import { Box, styled } from '@mui/system';

import InformationCard from '@/components/information-card';
import TextPanel from '@/components/text-panel';
import Reference from '@/components/reference';
import Section from '@/components/section';
import Button from '@/components/button';
import MobileMenu from '@/components/mobile-menu';
import DesktopMenu from '@/components/desktop-menu';

import menuItems from '@/data/menu';
import communities from '@/data/communities';
import companies from '@/data/companies';

const StyledDiv = styled('div')``;
const StyledImg = styled('img')``;

export default function Home() {
	const [opacity, setOpacity] = useState(0);
	const [menuFixed, setMenuFixed] = useState(false);

	const headerHeight = 70;

	const handleScroll = () => {
		const newOpacity = Math.min(window.scrollY / window.innerHeight / 1.3, 1);
		setOpacity(newOpacity);

		setMenuFixed(window.scrollY > (window.innerHeight - headerHeight));
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		handleScroll();

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

  return (
		<>
			<Section
				sectionSx={{
					backgroundColor: '#F6EAFA',
					padding: 0,
					display: 'flex',
					alignItems: 'center',
					height: {
						xs: `calc(100vh - ${headerHeight}px)`,
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
							xs: 'inline-flex',
						},
						position: 'absolute',
						top: 0,
						left: 0,
						width: '100%',
						height: `calc(100vh - ${headerHeight}px)`,
						backgroundColor: 'black',
						zIndex: 2,
					}}
				/>
				<StyledImg
					src="/images/logo.png"
					sx={{
						maxHeight: 'calc(105vh - 105px)',
						margin: '0 auto',
						flex: 1,
					}}
				/>
			</Section>
			<DesktopMenu items={menuItems} height={headerHeight} fixed={menuFixed} />
			<MobileMenu items={menuItems} />
			<Section
				id="about"
				sectionSx={{ backgroundColor: '#EEEEEE', padding: { xs: 0, lg: '5em 2em' } }}
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
						marginTop: {
							lg: 0
						},
						position: 'relative',
						textIndent: '2em',
						textAlign: 'justify',
						zIndex: 2,
						lineHeight: {
							lg: 2,
						},
						width: {
							xs: '100%',
							lg: '50%'
						},
						'p:not(:first-of-type)': {
							margin: '2rem 0',
						}
					}}
				>
					<StyledDiv
						sx={{
							position: 'absolute',
							backgroundColor: 'white',
							height: '108%',
							width: '125%',
							zIndex: -1,
							top: 0,
							left: 0,
							boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(0, 0, 0, 0.4)',
							display: {
								xs: 'none',
								lg: 'inline-flex',
							},
						}}
					/>
					<p>
						O AWSome Women Community Summit é um evento que acontece ao redor do mundo e é organizado pelas mulheres da comunidade
						ativa (AWS User Groups, AWS Community Builders, AWS Heroes) da Amazon Web Services (AWS). Pela primeira ve acontecerá no Brasil em Belo Horizonte - MG, no dia 09 de março de 2024.
					</p>
					<p>
						O foco é celebrar e capacitar mulheres na tecnologia, apoiar o desenvolvimento técnico criando uma rede de apoio e trazendo networking. Esperamos promover a
						diversidade e inclusão em tech, quebrar barreiras e paradigmas ajudando a combater a disparidade de
						gênero nesse mercado. Vamos também criar e manter um ambiente seguro e focado em educação, inovação e inspiração de mais
						mulheres.
					</p>
					<p>
						Então, se você é daquelas que codam, gerenciam projetos, analisam dados ou qualquer outra coisa incrível
						em tecnologia, ou se você é simplesmente curiosa e quer aprender mais, saiba que você encontrou o seu lugar.
						Aqui, a gente valoriza cada história, cada trajetória e acredita no poder da união feminina!
					</p>
					<p>
						Vamos juntas nessa jornada incrível? Porque a gente sabe: juntas, somos mais fortes, mais sábias e
						infinitamente mais AWSome!
					</p>
					<StyledImg
						alt="dot bg"
						src="/images/dot_bg.png"
						width={130}
						height={130}
						style={{ zIndex: 1, right: -40, bottom: -148, position: 'absolute' }}
						sx={{ display: { xs: 'none', lg: 'inline' } }}
					/>
				</TextPanel>
				<TextPanel
					primary={false}
					title={'O que esperar?'}
					sx={{
						boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(0, 0, 0, 0.4)',
						margin: {
							xs: '1rem 0',
							lg: '18rem 0 3rem'
						},
						zIndex: 2,
						width: {
							xs: '100%',
							lg: '50%'
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
					<ul style={{ marginLeft: '15px' }}>
						<li>
							Renove e revitalize seus conhecimentos em cloud computing, desenvolvimento de software, cyber segurança, projetos e produtos, QA e testing, infraestrutura, observabilidade, etc, e tópicos em altas de tecnologia.
						</li>
						<li>
							Vamos trazer mulheres que arrasam no mercado de tecnologia pra contar suas trajetórias, os perrengues, as vitórias e como elas chegaram lá. É pra sair de lá com aquela dose extra de inspiração!
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
							e também aprender, esperamos você no Awesome
							Women Community Summit!
						</li>
						<li>
							Se você está em transição de carreira, no início ou ainda não sabe que área escolher dentro de
							tecnologia, teremos uma trilha de carreiras com mulheres incríveis que vão contar como é o dia a dia
							delas nas áreas de Cloud/DevOps/SRE, Desenvolvimento de Software Backend, Desenvolvimento de Software
							Frontend, Diretoria de Tecnologia, Liderança Tecnica, Gestão de Projetos, Securtiy, Inteligência
							Artificial, UX, Gestão de Pessoas, Testes, QA, Observabilidade, DataCenters, Banco de Dados, Redes de
							Computadores, Produtos, Agilidade, etc.
						</li>
						<li>
							Amamos brindes! Concorra a brindes como créditos para serem utilizados em sua conta AWS e várias outras surpresas.
						</li>
					</ul>
				</TextPanel>
			</Section>
			<Section id="content" title="Reserve seu lugar"  sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: {
							xs: 'repeat(1, 1fr)',
							md: 'repeat(2, 1fr)',
							lg: 'repeat(4, 1fr)',
						},
						gap: '1.5em',
						marginBottom: '2em',
						padding: {
							xs: '1rem',
							lg: '2rem',
						},
					}}
				>
					<InformationCard track={'carreira'} image={'/images/carreira.png'} title="Conteúdo de carreiras" description="O Nosso evento contará com vários conteúdos para ajudar a você as mais diversas áreas no mercado de tecnologia" />
					<InformationCard track={'iniciante'} image={'/images/iniciante.png'} title="Conteúdo iniciante" description="Se você está começando agora ou está em transição de carreira e quer apresentações detalhadas sobre os conceitos básicos de uso dos serviço" />
					<InformationCard track={'intermediario-e-avancado'} image={'/images/moderado.png'} title="Conteúdo moderado" description="Você já é usuário(a) AWS e quer se aprofundar em temas que são úteis para o seu dia a dia e para seu negócio" />
					<InformationCard track={'intermediario-e-avancado'} image={'/images/avancado.png'} title="Conteúdo avançado" description="Você é usuário(a) AWS avançado(a) e está interssado(a) em histórias e casos de uso de empresas que tiram o máximo da nuvem" />
				</Box>
				<Button link='https://www.sympla.com.br/evento/awsome-women-community-summit-brasil/2267788?referrer=www.awswomencommunitybrasil.com'>
					Inscrições Abertas
				</Button>
			</Section>
			<Section
				id="submit"
				title='NOSSAS INSCRIÇÕES ESTÃO ABERTAS!'
				sectionSx={{
					padding: {
						xs: '2em',
						lg: '3em 0',
					}
				}}
			>
				<h4 style={{ color: 'black' }}>
					Todo o valor arrecadado com a venda desses ingressos serão doados ao {' '}
					<a href="https://www.instagram.com/nave.veleirodaesperanca/" target="_blank">NAVE - Núcleo Veleiro da Esperança </a>,
					uma instituição/ONG que acolhe mulheres em situação de violência (agressão física, psicológica e social) dentro de Belo Horizonte e regiões próximas.
				</h4>
				<br/>
				<br/>
				<Button link='https://sessionize.com/awsome-women-community-summit-brasil-2024'>
					Inscreva-se aqui
				</Button>
			</Section>
			<Section
				id="communities"
				title="Comunidades apoiadoras"
				sectionSx={{
					backgroundColor: '#EEEEEE',
					padding: {
						xs: '2em',
						lg: '3em 0 8em',
					}
				}}
				sx={{
					display: 'flex',
					flexDirection: 'column',
					rowGap: '3em',
				}}
			>
				<Box sx={{
					display: 'flex',
					justifyContent: 'space-evenly',
					flexWrap: 'wrap',
					columnGap: {
						xs: '1em',
						lg: '0.5em',
					},
					rowGap: {
						xs: '1em',
					},
				}}>
					{
						communities.map((community, index) => (
							<Reference
								key={index}
								type="link"
								sm="lg"
								lg="sm"
								link={community.link}
								image={community.image}
								name={community.name}
							/>
						))
					}
				</Box>
			</Section>
			<Section
				id="companies"
				title="Empresas apoiadoras"
				sectionSx={{
					padding: {
						xs: '2em',
						lg: '3em 0 8em',
					}
				}}
				sx={{
					display: 'flex',
					flexDirection: 'column',
					rowGap: '3em',
				}}
			>
				<Box sx={{
					display: 'flex',
					justifyContent: 'space-evenly',
					flexWrap: 'wrap',
					columnGap: {
						xs: '1em',
						lg: '0.5em',
					},
					rowGap: {
						xs: '1em',
					},
				}}>
					{
						companies.map((community, index) => (
							<Reference
								key={index}
								type="link"
								sm="lg"
								lg="sm"
								link={community.link}
								image={community.image}
								name={community.name}
							/>
						))
					}
				</Box>
			</Section>
			<Section id="organizers" title="Organizadoras" sectionSx={{ backgroundColor: '#F6EAFA'}}>
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
					<Reference color={'#B53C7F'} sm="sm" link="https://www.linkedin.com/in/nellyandrade/" name="Nelly Andrade" image={'/images/vols/nelly.jpeg'}/>
					<Reference color={'#B53C7F'} sm="sm" link="https://twitter.com/shescloud_" name="Paloma Lataliza" image={'/images/vols/paloma.jpg'}/>
					<Reference color={'#B53C7F'} sm="sm" link="https://www.linkedin.com/in/rafaela-vidotti-5741ba111/" name="Rafaela Vidotti" image={'/images/vols/rafa.jpeg'}/>
					<Reference color={'#B53C7F'} sm="sm" link="https://www.linkedin.com/in/jessicaccoelho/" name="Jéssica Coelho" image={'/images/vols/jess.jpeg'}/>
					<Reference color={'#B53C7F'} sm="sm" link="https://www.linkedin.com/in/luisabrandt/" name="Luisa Brandt" image={'/images/vols/luisa.jpeg'}/>
					<Reference color={'#B53C7F'} sm="sm" link="https://www.linkedin.com/in/priscila-araujo-santos/" name="Priscila Araújo" image={'/images/vols/psant.jpg'}/>
				</Box>
			</Section>
			<Section sectionSx={{ color: 'rgb(191, 108, 154)', marginBottom: { xs: `${headerHeight}px`, lg: 0 } }}>
				<p style={{ fontSize: '2em', color: '#555' }}><b>QUER SER UM APOIADOR NO NOSSO EVENTO?</b></p>
				<p style={{ color: '#555' }}>Encontre abaixo o nosso Mídia Kit.</p>
				<p style={{ color: '#555' }}> Fale com a gente no e-mail:</p>
				<a href="mailto:contact@awswomencommunitybrasil.com" style={{ lineBreak: 'anywhere', fontWeight: 'bold' }}>contact@awswomencommunitybrasil.com</a>
				<br />
				<br />
				<div>
					<a href="https://drive.google.com/file/d/1lnoCNXCP2RlHS88ljguKtvzQkisgqIha/view" target="_blank"></a>
					<Button link={'https://drive.google.com/file/d/1lnoCNXCP2RlHS88ljguKtvzQkisgqIha/view'}>MÍDIA KIT</Button>
				</div>
			</Section>
		</>
	);
}
