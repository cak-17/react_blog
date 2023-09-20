import React from 'react';
import {
    RouterProvider,
} from 'react-router-dom';

import router from './pages/routes';
import './App.css';

export default function App() {
    return (
        <RouterProvider router={router} />
    );
}
