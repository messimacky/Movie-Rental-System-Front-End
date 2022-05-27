import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';

function LogoutButton() {
    const { logout, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
            <button className='pageBtn' onClick={() => logout()} style={{ cursor: 'pointer' }}>Sign Out</button>
        )

    );
}
export default LogoutButton 