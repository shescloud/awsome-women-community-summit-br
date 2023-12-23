import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/system';
import { Box } from '@mui/material';

import { Schedule } from '@/data/tracks';

type Props = {
	schedule: Schedule;
}

const StyledP = styled('p')({
	textAlign: 'center',
	margin: '0 auto',
	width: '100%',
});

// não vamos usar table por ser mais complicado de deixar responsivo
const ScheduleTable = ({ schedule }: Props) => {
	const theme = useTheme();
	const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

	return (
		<Box
			style={{ color: '#b26590', maxWidth: 1200, margin: '0 auto', display: 'flex', padding: '0.5em', rowGap: 10 }}
			sx={{ flexDirection: { xs: 'column' }, backgroundColor: '#EEEEEE' }}
		>
			{!isDesktop && <label style={{ textAlign: 'center', fontSize: '2em', textTransform: 'uppercase' }}>Trilha {schedule.name}</label>}
			<Box
				sx={{
					'p:not(:first-of-type)': {
						borderTop: {
							xs: '1px solid #b26590',
							lg: 'none',
						},
						borderLeft: {
							lg: '1px solid #b26590'
						},
						paddingLeft: {
							lg: '100px',
						},
					},
					'> p': {
						padding: '0.5em',
					},
					display: 'flex',
					flexDirection: {
						xs: 'column',
						lg: 'row',
					},
				}}
				style={{ border: '2px solid ', backgroundColor: '#ffd6eb', textAlign: 'center', fontSize: '1.5em' }}
			>
				<StyledP sx={{ maxWidth: { lg: '200px' } }}>Horário</StyledP>
				<StyledP sx={{ flex: 1, paddingLeft: { lg: '100px' } }}>{isDesktop ? `Trilha ${schedule.name} - ` : ''}Palestras</StyledP>
			</Box>
			{
				schedule.schedule.map((talk, index) => (
					<Box
						key={index}
						sx={{
							flexDirection: {
								xs: 'column',
								lg: 'row',
							},
						}}
						style={{
							display: 'flex',
							alignItems: 'center',
							textAlign: 'center',
							padding: '1em',
							backgroundColor: talk.isTalk ? 'white' : '#ffd6eb',
							boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.14), 0 0px 2px -5px rgba(0, 0, 0, 0.4)',
						}}
					>
						{
							isDesktop ?	(
								<>
									<StyledP style={{ padding: 10, fontWeight: 'bold' }} sx={{ maxWidth: '200px', fontSize: { xs: '0.8em', lg: '1em' } }}>{talk.from} - {talk.to}</StyledP>
									{talk.speaker && <img alt={talk.speaker.name} src={talk.speaker.avatar} width="100px" style={{ borderRadius: 5, margin: '5px 50px' }} />}
									<Box style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', paddingLeft: talk.speaker ? 0 : '100px' }}>
										<StyledP style={{ fontWeight: 'bold' }}>{talk.title}</StyledP>
										{
											talk.speaker
												? (
														<>
															<a style={{ fontWeight: 'bold' }} href={talk.speaker.link} rel="noreferrer" target="_blank">{talk.speaker.name}</a>
															<a href={talk.speaker.link} rel="noreferrer" target="_blank">{talk.speaker.role}</a>
														</>
												)
												: null
										}
									</Box>
								</>
							) : (
								<>
									<StyledP style={{ padding: 10, fontWeight: 'bold' }} sx={{ maxWidth: '200px', fontSize: { xs: '0.8em', lg: '1em' } }}>{talk.from} - {talk.to}</StyledP>
									<StyledP style={{ fontWeight: 'bold' }}>{talk.title}</StyledP>
									{
										talk.speaker
											? (
												<Box style={{ marginTop: '25px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
													<a style={{ fontWeight: 'bold' }} href={talk.speaker.link} rel="noreferrer" target="_blank">{talk.speaker.name}</a>
													<img alt={talk.speaker.name} src={talk.speaker.avatar} width="50%" style={{ borderRadius: 5, margin: '5px 0' }} />
													<a href={talk.speaker.link} rel="noreferrer" target="_blank">{talk.speaker.role}</a>
												</Box>
											)
											: null
									}
								</>
							)
						}
					</Box>
				))
			}
		</Box>
	);
};

export default ScheduleTable;
