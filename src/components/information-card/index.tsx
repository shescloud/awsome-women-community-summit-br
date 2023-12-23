import { Box, styled } from "@mui/material";
import Button from "@/components/button";
import { useRouter } from 'next/router';

type Props = {
	title: string;
	description: string;
	image: string;
	size?: 'sm' | 'md' | 'lg' | 'xl';
	track?: string;
};

const sizes = {
	sm: 50,
	md: 75,
	lg: 100,
	xl: 125,
};

const StyledP = styled('p')``;

const InformationCard = ({ track, title, description, image, size = 'md' }: Props) => {
	const router = useRouter();

	return (
		<div style={{
			border: '1px solid lightgray',
			alignContent: 'space-around',
			padding: 10,
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			rowGap: '2em',
			justifyContent: track ? 'space-between' : '',
		}}>
			<Box>
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
						margin: '0 auto 25px'
					}}
				/>
				<p style={{ color: '#999999', textAlign: 'justify' }}>
					{description}
				</p>
			</Box>
			{track && <Button onClick={() => router.push(`/trilhas/${track}`)}>Ver mais</Button>}
		</div>
	);
};

export default InformationCard;
