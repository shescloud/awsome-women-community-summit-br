import { Box } from '@mui/system';

type Props = {
	text: string;
};

const MenuItem = ({ text }: Props) => {
	return (
		<li
			style={{
				color: 'white',
				borderBottom: 'solid 1px rgba(249, 228, 245, 0.2)',
				listStyle: 'none',
				padding: '1em'
			}}
		>
			{text}
		</li>
	);
};

export default MenuItem;
