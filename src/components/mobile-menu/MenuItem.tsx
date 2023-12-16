import { Box } from '@mui/system';

type Props = {
	text: string;
	title?: boolean;
	link: string;
	onClick?: () => void;
};

const MenuItem = ({ text, title, link, onClick }: Props) => {
	const external = !link.startsWith('#');

	return (
		<a href={link} rel="noreferrer" onClick={() => onClick?.() } target={external ? "_blank" : ''}>
			<li
				style={{
					borderBottom: 'solid 1px rgba(249, 228, 245, 0.2)',
					listStyle: 'none',
					padding: '1em',
					fontWeight: '700',
					fontSize: '18px',
					textTransform: title ? 'uppercase' : 'none',
					lineHeight: 1
				}}
			>
				{text}
			</li>
		</a>
	);
};

export default MenuItem;
