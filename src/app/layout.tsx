import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';

export default function Layout({ children }: { children: any }) {
	return (
		<>
			<ThemeProvider theme={theme}>
				<main style={{ maxWidth: 1200, margin: '0 auto' }}>{children}</main>
			</ThemeProvider>
		</>
	)
}

const theme = createTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 374,
			md: 768,
			lg: 1024,
			xl: 1280,
		},
	},
	palette: {
		primary: {
			main: '#FDD5FA',
		},
		secondary: {
			main: '#D62DA8',
		},
	},
});
