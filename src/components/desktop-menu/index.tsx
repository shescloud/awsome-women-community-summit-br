import React from 'react';
import { Box } from '@mui/system';
import defaultItems, { MenuDataItem } from '@/data/menu';
import MenuItem from '@/components/menu-item';

import filter from 'lodash/filter';

type Props = {
	height: number;
	fixed: boolean;
	items?: MenuDataItem[];
};

const DesktopMenu = ({ height, fixed, items = defaultItems }: Props) => {
	return (
		<Box
			sx={{
				boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(0, 0, 0, 0.4)',
				display: {
					xs: 'none',
					lg: 'flex'
				},
				width: '100%',
				height: height,
				backgroundColor: '#BF6C9A',
				zIndex: 2,
				...(
					fixed
						? {
							position: 'fixed',
							top: 0,
							left: 0,
							zIndex: 999,
							marginBottom: '5em'
						}
						: {}
				)
			}}
		>
			<a
				href="https://sessionize.com/awsome-women-community-summit-brasil-2024/"
				target="_blank"
				rel="noreferrer"
				style={{
					color: '#BF6C9A',
					width: '30%',
					maxWidth: '300px',
					textAlign: 'center',
					height: '100%',
					backgroundColor: 'white',
					fontWeight: 'bold',
					textTransform: 'uppercase',
					whiteSpace: 'nowrap',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					padding: '0 1em',
				}}
			>
				Submeta sua palestra
			</a>
			{
				filter(items, (item) => !item.dropdown).map((item, index) => (
					<MenuItem {...item} key={index} />
				))
			}
		</Box>
	);
};

export default DesktopMenu;
