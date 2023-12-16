import { useState } from 'react';
import { Box, styled } from '@mui/system';
import { SxProps } from '@mui/system/styleFunctionSx';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import MenuItem from '@/components/mobile-menu/MenuItem';

type Props = {
	menuHeight?: number;
	sx?: SxProps;
};

const MobileMenu = ({ menuHeight = 70, sx }: Props) => {
	const [open, setOpen] = useState(false);

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
					width: open ? '100%' : 0,
					height: '100%',
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
					<MenuItem text="Home" />
					<MenuItem text="Home" />
					<MenuItem text="Home" />
					<MenuItem text="Home" />
				</ul>
				<Box onClick={() => setOpen(false)}>
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
					height: menuHeight,
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
						height: menuHeight,
						width: menuHeight,
						backgroundColor: '#BF6C9A',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<MenuIcon style={{ color: 'white' }} />
				</Box>
				<label style={{ width: '100%' }}>
					Submeta sua palestra
				</label>
			</Box>
		</Box>
	);
};

export default MobileMenu;
