import { ReactNode } from 'react';

type Props = {
	children?: ReactNode;
	id?: string;
	title: string;
	style?: object;
};

const SectionTitle = ({ style, title, children, id }: Props) => {
	return (
		<section id={id} style={{ textAlign: 'center', marginBottom: '5em', ...(style || {}) }}>
			<p
				style={{
					fontSize: '1.5em',
					textTransform: 'uppercase',
					color: 'purple',
					fontWeight: 'bold',
					padding: 10,
					marginBottom: 20
				}}
			>
				{title}
			</p>
			{children}
		</section>
	);
};

export default SectionTitle;
