import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { ArrowBack } from '@mui/icons-material';

const BackButton = (props) => {
    const navigate = useNavigate();
    return (
        // eslint-disable-next-line react/destructuring-assignment, react/prop-types
        <Button variant="contained" endIcon={<ArrowBack />} onClick={() => navigate(-1)}>{props.label ? props.label : 'Back'}</Button>
    );
};

export default BackButton;
