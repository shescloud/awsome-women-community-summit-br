import { Schedule } from '@/data/tracks';
import { Box } from '@mui/material';
import { styled } from '@mui/system';

type Props = {
	schedule: Schedule;
}

// não vamos usar table por ser mais complicado de deixar responsivo
const ScheduleTable = ({ schedule }: Props) => {
	return (
		<Box
			style={{ color: '#BF6C9A', maxWidth: 1200, margin: '0 auto', display: 'flex', padding: '0.5em', rowGap: 10 }}
			sx={{ flexDirection: { xs: 'column', lg: 'row' }, backgroundColor: '#EEEEEE' }}
		>
			<label style={{ textAlign: 'center', fontSize: '2em', textTransform: 'uppercase' }}>{schedule.name}</label>
			<Box style={{ border: '1px solid darkpink' }}>
				<p>Horário</p>
				<p>Palestras</p>
			</Box>
			{
				schedule.schedule.map((talk, index) => (
					<Box
						key={index}
						style={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							textAlign: 'center',
							padding: '1em',
							backgroundColor: talk.isTalk ? 'white' : '#FFB8DBFF',
							boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.14), 0 0px 2px -5px rgba(0, 0, 0, 0.4)',
						}}
					>
						<p style={{ padding: 10, fontSize: '0.8em', fontWeight: 'bold' }}>{talk.from} - {talk.to}</p>
						<p style={{ fontWeight: 'bold' }}>{talk.title}</p>
						{
							talk.speaker
								? (
									<Box style={{ marginTop: '25px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
										<a style={{ fontWeight: 'bold' }} href={talk.speaker.link} rel="noreferrer" target="_blank">{talk.speaker.name}</a>
										<img src={talk.speaker.avatar} width="50%" style={{ borderRadius: 5, margin: '5px 0' }} />
										<a href={talk.speaker.link} rel="noreferrer" target="_blank">{talk.speaker.role}</a>
									</Box>
								)
								: null
						}
					</Box>
				))
			}
		</Box>
	);
};

export default ScheduleTable;
