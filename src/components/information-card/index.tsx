import { styled } from "@mui/material";

type Props = {
	title: string;
	description: string;
	image: string;
	size?: 'sm' | 'md' | 'lg' | 'xl';
};

const sizes = {
	sm: 50,
	md: 75,
	lg: 100,
	xl: 125,
};

const StyledP = styled('p')``;

const InformationCard = ({ title, description, image, size = 'md' }: Props) => {
	return (
		<div style={{
			border: '1px solid lightgray',
			alignContent: 'space-around',
			padding: 10,
		}}>
			<StyledP
				sx={{
					fontSize: '1em',
					fontWeight: 'bold',
					lineHeight: 1,
					margin: '20px 0',
					color: '#BF6C9A',
					textTransform: 'uppercase',
					minHeight: {
						xs: '3em',
						sm: '2em',
					},
				}}
			>
				{title}
			</StyledP>
			<div
				style={{
					backgroundImage: `url(${image})`,
					backgroundPosition: 'center',
					backgroundSize: '100%',
					backgroundRepeat: 'no-repeat',
					width: sizes[size],
					height: sizes[size],
					margin: '20px auto',
				}}
			/>
			<p style={{ color: '#999999', textAlign: 'justify' }}>
				{description}
			</p>
		</div>
	);
};

export default InformationCard;
