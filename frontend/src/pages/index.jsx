import React from 'react';
import { Box, Container} from '@mui/material';
import { Outlet, Link } from 'react-router-dom';
import MenuWrapper from '../components/Menu';

const AppLayout = () => (
    <Container>
        <Box>
            <header>Top Nav</header>
        </Box>

        <Box>
            <Outlet />
        </Box>

        <footer style={{ textAlign: 'center' }}>
            {/* FOOTER */}
            <small>
                <div>
                    Django / React WebApp Template
                </div>
                <div>
                    ©2023 Created by
                    {' '}
                    <Link to="http://github.com/cak-17/">cak-17</Link>
                </div>
            </small>
        </footer>
    </Container>
);

export default AppLayout;
