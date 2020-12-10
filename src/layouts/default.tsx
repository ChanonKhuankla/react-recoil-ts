import React from 'react'

const defualtLayout = (props: React.ReactPortal): JSX.Element => {
    return (
        <>
            <h1>defualt</h1>
            {props.children}
        </>
    )
}

export default defualtLayout
