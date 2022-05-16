import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Home from './FirstPage';
const LoginButton = () => {
    const { Home } = useAuth0();

    return (
        <button onClick={() => Home()}>Login</button>
    );
}

export default LoginButton