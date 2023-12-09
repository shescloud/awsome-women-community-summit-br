type Props = {
	name?: string;
	image: string;
	link: string;
	size?: 'small' | 'medium' | 'large';
};

const sizes = {
	small: 75,
	medium: 100,
	large: 150
};

const Reference = ({ name, image, link, size = 'small' }: Props) => {
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
			<div
				style={{
					backgroundPosition: 'center',
					backgroundSize: '100%',
					backgroundRepeat: 'no-repeat',
					backgroundImage: `url(${image})`,
					width: sizes[size],
					height: sizes[size],
					borderRadius: 10,
					marginBottom: 10,
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
