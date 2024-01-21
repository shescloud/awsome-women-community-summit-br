import { ReactNode } from 'react';
import { Box, styled } from '@mui/system';
import { SxProps } from '@mui/system/styleFunctionSx';

type Props = {
	title: string;
	primary?: boolean;
	children: ReactNode;
	sx?: SxProps;
}

const H1 = styled('h1')``;

const TextPanel = ({ title, primary, children, sx }: Props) => {
	return (
		<Box
			sx={{
				backgroundColor: primary ? 'white' : '#C290A9',
				color: primary ? '#696065': 'white',
				padding: '50px',
				position: 'relative',
				...sx,
			}}
		>
			<H1 sx={{
				fontWeight: 'bold',
				textAlign: 'left',
				fontSize: 35,
				textTransform: 'uppercase',
				color: primary ? '#BF6C9A' : 'white',
				textIndent: 0,
				marginBottom: '30px',
			}}>
				{title}
			</H1>
			<div>
				{children}
			</div>
		</Box>
	);
};

export default TextPanel;
