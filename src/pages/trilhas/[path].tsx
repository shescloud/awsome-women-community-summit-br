import React, { useEffect } from 'react';

import { Box, styled } from '@mui/system';
import { useRouter } from 'next/router'
import ErrorPage from 'next/error';

import DesktopMenu from "@/components/desktop-menu";
import MobileMenu from '@/components/mobile-menu';
import ScheduleTable from "../../components/schedule-table";

import defaultSchedule, { Schedule } from '@/data/tracks';

type Props = {
	schedules?: Schedule[];
}

const TalkSchedule = ({ schedules = defaultSchedule }: Props) => {
	const router = useRouter();
	// precisa mover isso pro layout, mas por enquanto fica aqui
	// muito custoso criar o header pra cada pagina
	const headerHeight = 70;

	const schedule = schedules.find(schedule => schedule.slug === router.query.path);
	if (!schedule) {
		return <ErrorPage statusCode={404} />;
	}

	return (
		<>
			<DesktopMenu height={headerHeight} fixed={true} />
			<MobileMenu />
			<Box
				sx={{
					marginTop: { lg: `${headerHeight}px` },
					paddingBottom: { xs: `${headerHeight}px`, lg: 0 },
				}}
				style={{ backgroundColor: '#EEEEEE', height: '100%' }}
			>
				<ScheduleTable schedule={schedule} />
			</Box>
		</>
	);
};

export default TalkSchedule;
