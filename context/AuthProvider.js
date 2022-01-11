import React from 'react';
import { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

export const Auth = createContext();

const AuthProvider = ({ children }) => {
    const authContext = useFirebase();
    return (
        <Auth.Provider value={[authContext]}>
            {children}
        </Auth.Provider>
    );
};

export default AuthProvider;