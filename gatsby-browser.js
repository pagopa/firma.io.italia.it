import React from 'react';
import { ThemeProvider } from '@mui/material';
import { theme } from './src/theme';

export const wrapRootElement = ({ element }) => {
	return <ThemeProvider theme={theme}>{element}</ThemeProvider>;
};
