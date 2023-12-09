import { ReactNode } from 'react';
import { Box } from '@mui/system';

import style from './style.module.scss';

type Props = {
	title: string;
	primary?: boolean;
	children: ReactNode;
	className?: string;
}

const TextPanel = ({ title, primary, children, className }: Props) => {
	return (
		<Box
			className={`${style.textPanel} ${className ?? ''}`}
			sx={{
				backgroundColor: primary ? 'primary.main' : 'secondary.main',
				color: primary ? 'secondary.main' : 'primary.main',
			}}
		>
			<h1 className={style.title}>{title}</h1>
			<div className={style.content}>
				{children}
			</div>
		</Box>
	);
};

export default TextPanel;
