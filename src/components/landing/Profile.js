import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';

function Profile() {
    const { user, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
            <article className='column'>
                 {user?.picture && <img src={user.picture} alt={user.name} style={{width:'32px',height:'32px'}} />}
                
           </article>
        )
    )
}
export default Profile