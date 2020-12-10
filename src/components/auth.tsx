import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import routeConfig from '../routeConfig'
const Auth = (): JSX.Element => {
    const checkLogin = localStorage.getItem('auth')

    // console.log('checkLogin', checkLogin)

    if (!checkLogin) {
        return (
            <>
                <Route path="/" exact component={React.lazy(() => import('../layouts/login'))} />
                <Redirect to="/" />
            </>
        )
    }

    console.log('routeConfig', routeConfig)

    return (
        <Switch>
            {routeConfig.map((f, i) => {
                return <Route path={f.path} key={i} component={f.components} />
            })}
        </Switch>
    )
}
export default Auth
