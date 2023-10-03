import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { ArrowBack } from '@mui/icons-material';

const BackButton = ({ label }) => {
    const navigate = useNavigate();
    return (
        <Button variant="contained" endIcon={<ArrowBack />} onClick={() => navigate(-1)}>{label || 'Back'}</Button>
    );
};

export default BackButton;
