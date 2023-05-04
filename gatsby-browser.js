import React from 'react';
import { ThemeProvider } from '@mui/material';
import { theme } from './src/theme';
import CssBaseline from '@mui/material/CssBaseline';

export const wrapRootElement = ({ element }) => {
	return (
		<>
			<CssBaseline />
			<ThemeProvider theme={theme}>{element}</ThemeProvider>
		</>
	);
};
