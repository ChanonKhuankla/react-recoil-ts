import React, { useEffect } from 'react';

const Loading = (): JSX.Element => {
    useEffect(() => {
        console.log('Loadding ..');
    }, []);

    return <h1>Loadding....</h1>;
};

export default Loading;
