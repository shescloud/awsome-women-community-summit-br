import { ReactNode } from 'react';
import { SxProps } from '@mui/system/styleFunctionSx';
import { styled } from '@mui/system';

type Props = {
	children?: ReactNode;
	id?: string;
	title: string;
	sx?: SxProps
	shadowed?: boolean;
};

const StyledSection = styled('section')``;

const SectionTitle = ({ title, children, id, sx, shadowed }: Props) => {
	return (
		<StyledSection
			id={id}
			sx={{
				textAlign: 'center',
				marginBottom: '5em',
				boxShadow: shadowed ? '1px 1px 20px 0px rgba(0, 0, 0, 0.5)' : 'none',
				...sx,
			}}
		>
			<p
				style={{
					fontSize: '1.5em',
					textTransform: 'uppercase',
					color: 'purple',
					fontWeight: 'bold',
					padding: 10,
					marginBottom: 20,
				}}
			>
				{title}
			</p>
			{children}
		</StyledSection>
	);
};

export default SectionTitle;
