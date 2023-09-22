import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

const Copyright = () => (
    <Typography variant="body2" color="text.secondary">
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
            Your Website
        </Link>
        {' '}
        {new Date().getFullYear()}
        .
    </Typography>
);

const StickyFooter = () => {
    <Box>
        <Container maxWidth="sm">
            <Typography variant="body1">
                My sticky footer can be found here.
            </Typography>
            <Copyright />
        </Container>
    </Box>;
};

export default StickyFooter;
