import React from 'react';
import Input from 'antd/es/input/Input';
import { useNavigate } from 'react-router-dom';

const SearchForm = () => {
    const navigate = useNavigate();
    const { Search } = Input;
    const handleSearch = (searchText) => {
        navigate(`/search?query=${searchText}`);
    };

    return (
        <Search
            placeholder="Search for Posts Title..."
            onSearch={handleSearch}
            enterButton="Search"
            style={{ paddingTop: '1rem' }}
        />
    );
};

export default SearchForm;
