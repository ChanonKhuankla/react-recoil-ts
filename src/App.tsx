import React, { Suspense } from 'react';
import { Loading } from './pages';
import Router from './router';
import { RecoilRoot } from 'recoil';

const App = (): JSX.Element => {
    return (
        <RecoilRoot>
            <Suspense fallback={<Loading />}>
                <Router />
            </Suspense>
        </RecoilRoot>
    );
};

export default App;
