import React from 'react'
const Dashboard = React.lazy(() => import('./pages/dashboard'))

export default [
    {
        path: '/',
        components: Dashboard,
    },
]
