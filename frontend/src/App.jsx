import React from 'react';
import {
    RouterProvider,
} from 'react-router-dom';

import { SnackbarProvider } from 'notistack';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

import router from './pages/routes';
import './App.css';

const App = () => (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <SnackbarProvider maxSnack={5}>
            <RouterProvider router={router} />
        </SnackbarProvider>
    </ThemeProvider>
);

export default App;
