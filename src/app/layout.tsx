import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';

export default function Layout({ children }: { children: any }) {
	return (
		<>
			<ThemeProvider theme={theme}>
				<main>{children}</main>
			</ThemeProvider>
		</>
	)
}

const theme = createTheme({
	palette: {
		primary: {
			main: '#FDD5FA',
		},
		secondary: {
			main: '#D62DA8',
		},
	},
});
