import { useState } from 'react';
import { Box, styled } from '@mui/system';
import { SxProps } from '@mui/system/styleFunctionSx';


import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import MenuItem from '@/components/menu-item';

import defaultItems, { MenuDataItem } from '@/data/menu';
import { useRouter } from 'next/router';

type Props = {
	menuHeight?: number;
	sx?: SxProps;
	items?: MenuDataItem[];
};

const MobileMenu = ({ menuHeight: menuSize = 70, sx, items = defaultItems }: Props) => {
	const router = useRouter();

	const [open, setOpen] = useState(false);
	const onMenuItemClick = (link?: string) => {
		setOpen(false);

		if (link) {
			return router.push(link);
		}
	};


	return (
		<Box
			sx={{
				display: {
					xs: 'flex',
					lg: 'none',
				},
			}}
		>
			<Box
				style={{
					marginLeft: open ? 0 : '-100%',
					width: '100%',
					height: '100lvh',
					backgroundColor: '#BF6C9A',
					transition: 'all 0.3s',
					zIndex: 4,
					top: 0,
					position: 'fixed',
					display: 'flex',
					overflowX: 'hidden',
					flexDirection: 'column',
					justifyContent: 'space-between',
				}}
			>
				<ul
					style={{
						display: 'flex',
						flexDirection: 'column',
					}}
				>
					{
						items.map((item, index) => (
							<MenuItem key={index} {...item} onClick={onMenuItemClick} />
						))
					}
				</ul>
				<Box onClick={() => setOpen(false)} style={{ width: menuSize, textAlign: 'center', position: 'fixed', bottom: 0 }}>
					<CloseIcon style={{ color: 'white', fontSize: 40, margin: 10 }} />
				</Box>
			</Box>
			<Box
				sx={{
					position: 'fixed',
					top: 'auto',
					bottom: 0,
					left: 0,
					width: '100vw',
					height: menuSize,
					backgroundColor: 'white',
					textTransform: 'uppercase',
					color: '#BF6C9A',
					fontWeight: 600,
					fontSize: '1.1em',
					textAlign: 'center',
					display: 'flex',
					alignItems: 'center',
					zIndex: 3,
					...sx,
				}}
			>
				<Box
					onClick={() => setOpen(true)}
					sx={{
						height: menuSize,
						width: menuSize,
						backgroundColor: '#BF6C9A',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<MenuIcon style={{ color: 'white' }} />
				</Box>
				<a href="https://sessionize.com/awsome-women-community-summit-brasil-2024/" target="_blank" rel="noreferrer" style={{ width: '100%' }}>
					Submeta sua palestra
				</a>
			</Box>
		</Box>
	);
};

export default MobileMenu;
