import { Box, styled } from '@mui/system';

type Props = {
	text: string;
	title?: boolean;
	external: boolean;
	link: string;
	onClick?: () => void;
};

const StyledLi = styled('li')``;
const StyledA = styled('a')``;

const Index = ({ text, title, link, onClick, external }: Props) => {
	return (
		<StyledA
			sx={{
				flex: { lg: 1 },
				display: { lg: 'flex' },
				justifyContent: 'center',
				alignItems: 'center',
			}}
			href={link}
			rel="noreferrer"
			onClick={() => onClick?.() }
			target={external ? "_blank" : ''}
		>
			<StyledLi
				sx={{
					borderBottom: {
						xs: '1px solid #f9e4f533',
						lg: 'none'
					},
					textAlign: {
						lg: 'center'
					},
					padding: {
						xs: '1em',
						lg: '0 1em',
					},
					flex: {
						lg: 1,
					},
				}}
				style={{
					listStyle: 'none',
					fontSize: '18px',
					textTransform: title ? 'uppercase' : 'none',
					lineHeight: 1,
					height: 'fit-content',
					color: 'white',
				}}
			>
				{text}
			</StyledLi>
		</StyledA>
	);
};

export default Index;
