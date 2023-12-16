import { Box } from '@mui/system';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';

type sizes = 'sm' | 'md' | 'lg' | 'xl';

type Props = {
	name?: string;
	image: string;
	mobileImage?: string;
	link: string;
	grayscaleMobile?: boolean;
	type?: 'twitter' | 'linkedin' | 'github' | 'link';
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

const getIcon = (icon: Props['type']) => {
	const isLink = icon === 'link';

	const props = {
		sx: {
			display: {
				xs: isLink ? 'none' : 'flex',
				lg: 'flex',
			},
			borderRadius: '30%',
			color: {
				xs: '#8c4c65',
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
	};

	return map[icon!];
};

const Reference = ({ name, image, link, sm = 'sm', lg, xl, md, type, mobileImage, grayscaleMobile = true }: Props) => {
	const [firstName, lastName] = name?.split(' ') || [];

	return (
		<a
			href={link}
			target="_blank"
			style={{
				display: 'flex',
				alignItems: 'center',
				flexDirection: 'column',
				color: '#BF6C9A'
			}}
		>
			<Box
				sx={{
					backgroundPosition: 'center',
					backgroundSize: '100%',
					backgroundRepeat: 'no-repeat',
					backgroundImage: {
						// gambiarra de leve, se tiver uma imagem não quadrada pra grayscale no mobile tem q arrumar isso aqui
						xs: `${grayscaleMobile ? 'linear-gradient(black, black),' : ''} url(${mobileImage || image})`,
						lg: `linear-gradient(black, black), url(${image})`,
					},
					backgroundBlendMode: 'saturation',
					borderRadius: {
						xs: 5,
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
			>
				{
					!!type && (
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
							{ getIcon(type) }
						</Box>
					)
				}
			</Box>
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
