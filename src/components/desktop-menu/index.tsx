import React, { useEffect } from 'react';
import { Box, styled } from '@mui/system';
import defaultItems, { MenuDataItem } from '@/data/menu';
import MenuItem from '@/components/menu-item';


type Props = {
	height: number;
	fixed: boolean;
	items?: MenuDataItem[];
};

const DesktopMenu = ({ height, fixed, items = defaultItems }: Props) => {
	return (
		<Box
			sx={{
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
				items.map((item, index) => (
					<MenuItem
						link={item.link}
						text={item.text}
						title={item.title}
						external={item.external}
						key={index}
					/>
				))
			}
		</Box>
	);
};

export default DesktopMenu;
