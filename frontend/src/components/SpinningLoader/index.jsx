import React from 'react';
import { useSelector } from 'react-redux';
import { Spin } from 'antd';

const SpinningLoader = ({ loader }) => {
    const isLoading = useSelector(loader);
    return (
        <Spin spinning={isLoading} />
    );
};

export default SpinningLoader;
