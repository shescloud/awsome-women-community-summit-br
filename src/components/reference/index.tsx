import { Box } from '@mui/system';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import InstagramIcon from '@mui/icons-material/Instagram';

type sizes = 'sm' | 'md' | 'lg' | 'xl';

type Props = {
	name?: string;
	image: string;
	link: string;
	color?: string;
	type?: 'twitter' | 'linkedin' | 'github' | 'link';
	sm?: sizes;
	md?: sizes;
	lg?: sizes;
	xl?: sizes;
};

const sizes = {
	sm: 80,
	md: 100,
	lg: 120,
	xl: 175,
};

const getLinkType = (link: string) => {
	if (link?.includes('twitter') ) {
		return 'twitter';
	}

	if (link?.includes('linkedin')) {
		return 'linkedin';
	}

	if (link?.includes('github')) {
		return 'github';
	}

	if (link?.includes('instagram')) {
		return 'instagram';
	}

	return 'link';
};

const getIcon = (link: string) => {
	const props = {
		sx: {
			display: {
				xs: 'none',
				lg: 'flex',
			},
			borderRadius: '30%',
			color: {
				lg: '#ff80b0'
			},
		},
	};

	const map = {
		twitter: <XIcon
			{ ...props }
			sx={{
				...props.sx,
				padding: { xs: '1.5px', lg: 0 },
			}}
		/>,
		github: <GitHubIcon { ...props } />,
		linkedin: <LinkedInIcon { ...props } />,
		link: <LinkIcon { ...props } />,
		instagram: <InstagramIcon { ...props } />,
	};

	return map[getLinkType(link)];
};

const Reference = ({ name, image, link, sm = 'sm', lg, xl, md, type, color }: Props) => {
	const [firstName, ...lastName] = name?.split(' ') || [];

	return (
		<a
			href={link}
			target="_blank"
			style={{
				display: 'flex',
				alignItems: 'center',
				flexDirection: 'column',
				color: color || '#555',
			}}
		>
			<Box
				sx={{
					backgroundPosition: 'center',
					backgroundSize: '100%',
					backgroundRepeat: 'no-repeat',
					backgroundImage: {
						xs: `url(${image})`,
					},
					boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(0, 0, 0, 0.4)',
					borderRadius: {
						xs: 5,
					},
					marginBottom: name ? 2 : 0,
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
			>
			<Box
				sx={{
					backgroundColor: {
						xs: 'transparent',
						lg: '#000000',
					},
					opacity: {
						xs: 1,
						lg: 0,
					},
					width: '100%',
					height: '100%',
					transition: 'opacity 0.3s ease',
					display: 'flex',
					alignItems: {
						xs: 'flex-end',
						lg: 'center',
					},
					justifyContent: {
						xs: 'flex-start',
						lg: 'center',
					},
					'&:hover': {
						lg: {
							opacity: 0.7,
						},
					},
					borderRadius: {
						xs: 5,
					},
					padding: {
						xs: 0.75,
						lg: 0,
					}
				}}
			>
				{ getIcon(link) }
			</Box>
			</Box>
			{
				name && (
					<>
						<span style={{ fontWeight: 'bold', marginBottom: 0, lineHeight: 1 }}>{firstName}</span>
						<span style={{ fontSize: 13 }}>{lastName.join(' ')}</span>
					</>
				)
			}
		</a>
	)
};

export default Reference;
