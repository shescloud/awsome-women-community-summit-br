import { ReactNode } from 'react';
import { SxProps } from '@mui/system/styleFunctionSx';
import { styled } from '@mui/system';
import moment from 'moment';

type Props = {
	children?: ReactNode;
	id?: string;
	title?: string;
	sx?: SxProps
	sectionSx?: SxProps
	shadowed?: boolean;
	until?: string;
	from?: string;
};

const StyledSection = styled('section')``;
const StyledDiv = styled('div')``;
const StyledP = styled('p')``;

const shouldRender = (from: string | undefined, until: string | undefined) => {
	const current = moment();
	if (from && current.isBefore(moment(from).startOf('day'))) {
		return false;
	}

	if (until && current.isAfter(moment(until).endOf('day'))) {
		return false;
	}

	return true;
}

const SectionTitle = ({ title, children, id, sx, sectionSx, from, until }: Props) => {
	if (!shouldRender(from, until)) {
		return null;
	}

	return (
		<StyledSection
			id={id}
			sx={{
				padding: {
					xs: '2em',
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
						<StyledP
							sx={{
								fontSize: {
									xs: '35px',
								},
							}}
							style={{
								textTransform: 'uppercase',
								color: '#BF6C9A',
								fontWeight: 900,
								padding: 10,
								marginBottom: 20,
							}}
						>
							{title}
						</StyledP>
					)
				}
				{children}
			</StyledDiv>
		</StyledSection>
	);
};

export default SectionTitle;
