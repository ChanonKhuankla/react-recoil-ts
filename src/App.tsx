import React, { Suspense } from 'react'
import { Loading } from './pages'
// import Router from './router'
import Auth from './components/auth'
import { RecoilRoot } from 'recoil'
import { BrowserRouter } from 'react-router-dom'

const App = (): JSX.Element => {
    return (
        <RecoilRoot>
            <Suspense fallback={<Loading />}>
                <BrowserRouter>
                    <Auth />
                </BrowserRouter>
            </Suspense>
        </RecoilRoot>
    )
}

export default App
