import { Box } from '@mui/system';

type sizes = 'sm' | 'md' | 'lg' | 'xl';

type Props = {
	name?: string;
	image: string;
	link: string;
	sm?: sizes;
	md?: sizes;
	lg?: sizes;
	xl?: sizes;
};

const sizes = {
	sm: 75,
	md: 100,
	lg: 150,
	xl: 200,
};

const Reference = ({ name, image, link, sm = 'sm', lg, xl, md }: Props) => {
	const [firstName, lastName] = name?.split(' ') || [];

	return (
		<a
			href={link}
			target="_blank"
			style={{
				display: 'flex',
				alignItems: 'center',
				flexDirection: 'column',
				color: 'purple'
			}}
		>
			<Box
				sx={{
					backgroundPosition: 'center',
					backgroundSize: '100%',
					backgroundRepeat: 'no-repeat',
					backgroundImage: `url(${image})`,
					borderRadius: {
						xs: 5,
						lg: 20,
					},
					marginBottom: 2,
					width: {
						xs: sizes[sm!],
						sm: sizes[sm!],
						md: sizes[md!],
						lg: sizes[lg!],
						xl: sizes[xl!],
					},
					height: {
						xs: sizes[sm!],
						sm: sizes[sm!],
						md: sizes[md!],
						lg: sizes[lg!],
						xl: sizes[xl!],
					},
				}}
			/>
			{
				name && (
					<>
						<span style={{ fontWeight: 'bold', marginBottom: 0, lineHeight: 0.5 }}>{firstName}</span>
						<span style={{ fontSize: 13 }}>{lastName}</span>
					</>
				)
			}
		</a>
	)
};

export default Reference;
