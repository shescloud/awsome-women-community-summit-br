import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { styled, Box } from '@mui/system';

import { MenuDataItem } from '@/data/menu';
import { useState } from 'react';
import { useRouter } from 'next/router';

type Props = MenuDataItem & {
	onClick?: (link?: string) => void;
	submenu?: boolean;
};

const StyledLi = styled('li')``;

const MenuItem = ({ dropdown, text, title, link, onClick, external, submenu }: Props) => {
	const router = useRouter();
	const [open, setOpen] = useState(false);

	const onLocalClick = (clickedLink?: string) => {
		if (dropdown && !clickedLink) {
			return setOpen(!open);
		}

		onClick?.();

		if (external) {
			return window.open(link, '_blank');
		}

		return router.push(clickedLink || link);
	};

	return (
		<Box
			style={{
				backgroundColor: submenu ? '#EEEEEE' : '',
			}}
			sx={{
				flex: { lg: 1 },
				display: { lg: 'flex' },
				justifyContent: 'center',
				alignItems: 'center',
				cursor: 'pointer',
			}}
			onClick={() => onLocalClick()}
		>
			<StyledLi
				sx={{
					borderBottom: {
						xs: '1px solid #f9e4f533',
						lg: 'none'
					},
					textAlign: {
						lg: 'center'
					},
					padding: {
						xs: `1em ${dropdown ? 0 : '1.5em'} 0`,
						lg: '0 1em',
					},
					flex: {
						lg: 1,
					},
				}}
				style={{
					listStyle: 'none',
					fontSize: '18px',
					textTransform: title ? 'uppercase' : 'none',
					lineHeight: 1,
					height: 'fit-content',
					color: submenu ? 'rgb(191, 108, 154)' : 'white',
				}}
			>
				<Box sx={{ marginBottom: { xs: '1em', lg: 0 } }}>
					{dropdown && (
						<ArrowDropDownIcon style={{ transition: 'transform 0.4s ease', transform: `rotate(${open ? -180 : 0}deg)` }} />
					)}
					{text}
				</Box>
				{dropdown && (
					<Box
						style={{
							overflow: 'hidden',
							height: open ? `${dropdown.length + 3.5}em` : 0,
							transition: 'height 0.4s ease',
							display: 'flex',
							flexDirection: 'column',
							padding: '0 1.5em',
							rowGap: '1em',
							textTransform: 'uppercase',
						}}
					>
						{dropdown.map((item, index) => (
							<Box onClick={() => onLocalClick(item.link)} key={index}>{item.text}</Box>
						))}
					</Box>
				)}
			</StyledLi>
		</Box>
	);
};

export default MenuItem;
