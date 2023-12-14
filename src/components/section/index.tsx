import { ReactNode } from 'react';
import { SxProps } from '@mui/system/styleFunctionSx';
import { styled } from '@mui/system';

type Props = {
	children?: ReactNode;
	id?: string;
	title?: string;
	sx?: SxProps
	sectionSx?: SxProps
	shadowed?: boolean;
};

const StyledSection = styled('section')``;
const StyledDiv = styled('div')``;

const SectionTitle = ({ title, children, id, sx, sectionSx, shadowed }: Props) => {
	return (
		<StyledSection
			id={id}
			sx={{
				boxShadow: shadowed ? '0px 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
				padding: {
					xs: '1em',
					lg: '5em 0',
				},
				...sectionSx
			}}
		>
			<StyledDiv sx={{
				maxWidth: 1200,
				margin: '0 auto',
				textAlign: 'center',
				...sx,
			}}>
				{
					title && (
						<p
							style={{
								fontSize: '2em',
								textTransform: 'uppercase',
								color: '#BF6C9A',
								fontWeight: 900,
								padding: 10,
								marginBottom: 20,
							}}
						>
							{title}
						</p>
					)
				}
				{children}
			</StyledDiv>
		</StyledSection>
	);
};

export default SectionTitle;
