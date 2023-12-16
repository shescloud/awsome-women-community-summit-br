import { Box, styled } from '@mui/system';

type Props = {
	text: string;
	title?: boolean;
	link: string;
	onClick?: () => void;
};

const StyledLi = styled('li')``;

const Index = ({ text, title, link, onClick }: Props) => {
	const external = !link.startsWith('#');

	return (
		<a href={link} rel="noreferrer" onClick={() => onClick?.() } target={external ? "_blank" : ''}>
			<StyledLi
				sx={{
					borderBottom: {
						xs: '1px solid #f9e4f533',
						lg: 'none'
					},
					borderLeft: {
						xs: 'none',
						lg: '1px solid #f9e4f533'
					},
					textAlign: {
						lg: 'center'
					},
					padding: {
						xs: '1em',
						lg: '0 1em',
					}
				}}
				style={{
					listStyle: 'none',
					fontWeight: '700',
					fontSize: '18px',
					textTransform: title ? 'uppercase' : 'none',
					lineHeight: 1,
					display: 'flex',
					alignItems: 'center',
					height: '100%',
					color: 'white',
				}}
			>
				{text}
			</StyledLi>
		</a>
	);
};

export default Index;
