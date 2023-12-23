import { Box } from '@mui/material';
import { ReactNode } from 'react';
import { useRouter } from 'next/router';

type Props = {
	children: ReactNode;
} & (
	{ link: string; external?: boolean; onClick?: never } | { link?: never; onClick: () => void; external?: never }
);

const CustomButton = ({ link, children, onClick, external = true }: Props) => {
	const router = useRouter();

	const onLocalClick = () => {
		onClick?.();

		if (link) {
			if (external) {
				window.open(link, '_blank');
			} else {
				return router.push(link);
			}
		}
	};

	return (
		<Box
			className="button large buy-ticket-link"
			onClick={onLocalClick}
			style={{
				lineHeight: 2.5,
				height: 45,
				width: 'fit-content',
				fontSize: 18,
				textTransform: 'uppercase',
				letterSpacing: 1,
				padding: '0 25px',
				border: 0,
				color: '#fff',
				cursor: 'pointer',
				textAlign: 'center',
				fontWeight: 600,
				display: 'inline-block',
				boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(0, 0, 0, 0.4)',
				backgroundColor: '#BF6C9A',
				backgroundSize: 'auto 110%',
			}}
		>
			{children}
		</Box>
	);
};

export default CustomButton;
