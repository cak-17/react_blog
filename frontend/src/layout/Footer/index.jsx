import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
    <div style={{ textAlign: 'center' }}>
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
    </div>
);

export default Footer;
