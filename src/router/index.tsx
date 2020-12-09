import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const router = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={React.lazy(() => import('../pages/dashboard'))} />
        </BrowserRouter>
    );
};

export default router;
