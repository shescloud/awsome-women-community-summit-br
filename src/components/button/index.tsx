import { ReactNode } from 'react';

type Props = {
	link: string;
	children: ReactNode;
};

const CustomButton = ({ link, children }: Props) => {
	return (
		<a
			className="button large buy-ticket-link"
			href={link}
			target="_blank"
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
				background: '-webkit-linear-gradient(135deg, #BF6C9A, #903d74)',
				backgroundSize: 'auto 110%',
			}}
		>
			{children}
		</a>
	);
};

export default CustomButton;
