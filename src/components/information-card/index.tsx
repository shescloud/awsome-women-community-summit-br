type Props = {
	title: string;
	description: string;
	image: string;
	size?: 'small' | 'medium' | 'large';
};

const sizes = {
	small: 50,
	medium: 75,
	large: 100
};

const InformationCard = ({ title, description, image, size = 'small' }: Props) => {
	return (
		<div style={{ border: '1px solid lightgray', width: 170, padding: 10, alignContent: 'space-around' }}>
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
