import { useRouter } from 'next/router';
import React from 'react';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children }) => {
    // Fetch the user client-side
    const { user, isLoading } = useAuth();
    const router = useRouter();
    console.log(isLoading);

    // Server-render loading state
    if (isLoading) {
        return <div style={{
            display: "flex",
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
        }}>
            <h1>LOADING</h1>
        </div>
    }
    if (!user.email) {
        router.replace('/login')
    }

    // Once the user request finishes, show the user
    return (
        <div>
            {children}
        </div>
    )
};

export default PrivateRoute;