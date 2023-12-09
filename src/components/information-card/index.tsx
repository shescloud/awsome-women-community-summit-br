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

const InformationCard = ({ title, description, image, size = 'sm' }: Props) => {
	return (
		<div style={{ border: '1px solid lightgray', padding: 10, alignContent: 'space-around' }}>
			<span style={{ fontSize: '1.5em', fontWeight: 'bold', lineHeight: 1, margin: '100 0', color: 'purple' }}>{title}</span>
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
