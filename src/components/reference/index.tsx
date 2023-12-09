type Props = {
	image: string;
};

const Reference = ({ image }: Props) => {
	return (
		<div
			style={{
				backgroundPosition: 'center',
				backgroundSize: '100%',
				backgroundRepeat: 'no-repeat',
				backgroundImage: `url(${image})`,
				width: 75,
				height: 75
			}}
		/>
	)
};

export default Reference;
