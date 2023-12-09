import { Box } from '@mui/system';

import TextPanel from '@/components/text-panel';
import Reference from '@/components/reference';

import style from './style.module.scss';

export default function Home() {
  return (
		<>
			<section className={style.home}>
				<TextPanel className={style.firstContent} primary={true} title={'Quem somos?'}>
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
				<TextPanel className={style.secondContent} primary={false} title={'O que esperar?'}>
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
			</section>
			<section>
				Organizadoras
				<Box sx={{
					display: 'grid',
					gridTemplateColumns: 'repeat(2, 1fr)',
				}}>
					<Reference image={'/images/vols/psant.jpg'}/>
					<Reference image={'/images/vols/paloma.jpg'}/>
					<Reference image={'/images/vols/luisa.jpeg'}/>
					<Reference image={'/images/vols/rafa.jpeg'}/>
					<Reference image={'/images/vols/jess.jpeg'}/>
					<Reference image={'/images/vols/nelly.jpeg'}/>
				</Box>
			</section>
		</>
	);
}


// #page .section-6 .volunteers .vl-i .person[data-lname="Araújo"] .img {
// 	background-image: url(../images/vols/psant.jpg);
// }
//
// #page .section-6 .volunteers .vl-i .person[data-lname="Lataliza"] .img {
// 	background-image: url(../images/vols/paloma.jpg);
// }
//
// #page .section-6 .volunteers .vl-i .person[data-lname="Brandt"] .img {
// 	background-image: url(../images/vols/luisa.jpeg);
// }
//
// #page .section-6 .volunteers .vl-i .person[data-lname="Vidotti"] .img {
// 	background-image: url(../images/vols/rafa.jpeg);
// }
// #page .section-6 .volunteers .vl-i .person[data-lname="Coelho"] .img {
// 	background-image: url(../images/vols/jess.jpeg);
// }
//
//
// #page .section-6 .volunteers .vl-i .person[data-lname="Andrade"] .img {
// 	background-image: url(../images/vols/nelly.jpeg);
// );
