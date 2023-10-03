import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const AppLayout = () => (
    <React.Fragment>
        <Box>
            <Header />
        </Box>
        <Box align="center">
            <Outlet />
        </Box>
        <Box>
            <Footer />
        </Box>
    </React.Fragment>
);

export default AppLayout;
