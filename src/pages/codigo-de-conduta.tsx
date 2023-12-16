import DesktopMenu from "@/components/desktop-menu";
import MobileMenu from '@/components/mobile-menu';
import { Box, styled } from '@mui/system';
import React from 'react';

const StyledH1 = styled('h1')({
	width: '100%',
	textAlign: 'left',
	borderBottom: '1px solid lightgray',
	padding: 3,
	fontSize: '1.5em',
	fontWeight: 'bold'
})

const StyledP = styled('p')({
	textIndent: '1em',
	padding: '1em 0.5em',
	textAlign: 'left',
});

const Code = () => {
	// precisa mover isso pro layout, mas por enquanto fica aqui
	// muito custoso criar o header pra cada pagina
	const headerHeight = 70;

	return (
		<>
			<DesktopMenu height={headerHeight} fixed={true} />
			<MobileMenu />
			<Box sx={{ color: '#BF6C9A', marginTop: { lg: `${headerHeight}px` }, marginBottom: `${headerHeight}px`, padding: { lg: '1em' } }}>
				<StyledH1 sx={{ textAlign: 'center', marginBottom: { lg: '1em' } }}>
					AWSome Women Community Summit Brasil
				</StyledH1>
				<img
					src="/images/logo.png"
					style={{
						maxWidth: '300px',
						margin: '0 auto',
						flex: 1,
					}}
				/>
				<StyledH1>Nosso código</StyledH1>
				<StyledP>
					Este Código de Conduta tem como objetivo assegurar que o AWSome Women Community Summit Brasil seja um espaço seguro, inclusivo e empoderador para mulheres (ou quem se identifica como uma) de todas as origens. Nosso foco é promover um ambiente de respeito mútuo, colaboração e crescimento profissional.
				</StyledP>
				<StyledH1>Escopo</StyledH1>
				<StyledP>
					Este Código de Conduta aplica-se a todas as participantes do evento, incluindo organizadores, palestrantes, patrocinadores e voluntários, em todas as atividades e espaços do evento.
				</StyledP>
				<StyledH1>Respeito e Inclusão</StyledH1>
				<StyledP>
					Todos os participantes, palestrantes, patrocinadores e voluntários devem tratar uns aos outros com respeito, dignidade e cortesia.
					Comprometemo-nos com um ambiente livre de discriminação, baseado em gênero, orientação sexual, raça, etnia, idade, religião, habilidade ou status socioeconômico.
				</StyledP>
				<StyledH1>Cidadania</StyledH1>
				<StyledP>
					Incentivamos ações que promovam igualdade e inclusão, fortalecendo as relações dentro da nossa comunidade.
					Reconhecemos o impacto positivo de cada indivíduo e incentivamos contribuições que enriqueçam nossas experiências e aprendizados.
				</StyledP>
				<StyledH1>Comportamento Esperado</StyledH1>
				<StyledP>
					Encorajamos a participação ativa e autêntica, contribuindo para a saúde e longevidade da comunidade.
					Exigimos colaboração, respeito e consideração nas interações.
					Abstenção de comportamento discriminatório, humilhante ou abusivo.
				</StyledP>
				<StyledH1>Comportamentos Inaceitáveis</StyledH1>
				<StyledP>
					Comportamentos inaceitáveis incluem assédio, intimidação, linguagem desrespeitosa e qualquer forma de discriminação ou humilhação.
				</StyledP>
				<StyledP>
					O assédio inclui: comentários verbais, escritos ou visuais (incluindo slides de apresentação) prejudiciais ou preconceituosos, relacionados a gênero, orientação sexual, raça, religião, aparência física, deficiência; uso inapropriado de nudez e/ou imagens sexuais; representações inapropriadas de violência; intimidação deliberada, perseguir ou importunar; fotografar ou gravar de modo abusivo; perturbação repetida de conversas ou outros eventos; contato físico ou visual inapropriado, ou abordagem sexual.
				</StyledP>
				<StyledH1>Consequências do Comportamento Inaceitável</StyledH1>
				<StyledP>
					Comportamentos inaceitáveis não serão tolerados. Ações apropriadas serão tomadas, incluindo advertência ou expulsão do evento.
				</StyledP>
				<StyledH1>Se Você Testemunhar ou For Vítima de um Comportamento Inaceitável</StyledH1>
				<StyledP>
					Encorajamos a reportar imediatamente a um membro da equipe do evento. Estamos preparados para auxiliar quem se sentir inseguro ou desconfortável.
					Caso prefira, pode enviar também um e-mail para contact@awswomencommunitybrasil.com
				</StyledP>
				<StyledH1>Como Responder a uma Queixa</StyledH1>
				<StyledP>
					Todas as queixas serão tratadas com seriedade e investigadas de forma imparcial e todas as partes envolvidas terão a oportunidade de ser ouvidas.
				</StyledP>
				<StyledH1>Responsabilidade</StyledH1>
				<StyledP>
					Todos os participantes são responsáveis por aderir a este Código de Conduta, garantindo um ambiente positivo e enriquecedor.
				</StyledP>
				<StyledH1>Apoio e Assistência</StyledH1>
				<StyledP>
					A equipe do evento está sempre disponível para oferecer apoio e assistência a quem precisar durante o evento.
				</StyledP>
			</Box>
		</>
	);
};

export default Code;
