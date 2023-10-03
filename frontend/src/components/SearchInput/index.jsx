import { TextField } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SearchInput = () => {
    const navigate = useNavigate();

    const handleSearch = (query) => {
        navigate(`/search?query=${query}`);
    };

    return (
        <TextField
            label="Search Post Title"
            variant="standard"
            onChange={(e) => handleSearch(e.target.value)}
        />
    );
};

export default SearchInput;
