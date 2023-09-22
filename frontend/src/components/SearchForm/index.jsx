import React from 'react';
import { useNavigate } from 'react-router-dom';

const SearchForm = () => {
    const navigate = useNavigate();

    const handleSearch = (searchText) => {
        navigate(`/search?query=${searchText}`);
    };

    return (
        0
    );
};

export default SearchForm;
