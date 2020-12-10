import React from 'react'

const defualtLayout = (props: React.ReactPortal): JSX.Element => {
    return (
        <>
            <h1>login</h1>
            {props.children}
        </>
    )
}

export default defualtLayout
