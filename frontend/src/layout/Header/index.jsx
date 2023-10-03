import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Menu,
    MenuItem,
} from '@mui/material';

import SearchInput from '../../components/SearchInput';

const Header = () => {
    const isAuth = useSelector((state) => state.auth.isAuth);
    const user = useSelector((state) => state.auth.user);

    // Menu State
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar
            position="static"
            color="primary"
        >
            <Toolbar>
                <Typography variant="h6" component="div">
                    <Link to="/">Home</Link>
                </Typography>
                <Typography variant="h6" component="div">
                    <Link to="/posts">Read All Posts</Link>
                </Typography>
                <Typography variant="h6" component="div">
                    <Link to="/posts/add">Add New Post</Link>
                </Typography>

                {/* Spacer */}
                <div style={{ flexGrow: 1 }} />

                {/* Search Input */}
                <SearchInput />

                {/* Login/Profile */}

                {isAuth ? (
                    <div>
                        <IconButton
                            size="large"
                            aria-label="Current user account"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            {user.icon}
                            {user.username}
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMunted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem disabled>
                                <Link to="/">Profile</Link>
                            </MenuItem>
                            <MenuItem disabled>
                                <Link to="/">Settings</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="/logout">Logout</Link>
                            </MenuItem>
                        </Menu>
                    </div>
                ) : (
                    <Typography variant="h6" component="div">
                        <Link to="/login">Login</Link>
                    </Typography>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Header;
