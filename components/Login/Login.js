import React from 'react';
import Logo from '../Logo/Logo';


const login = () => {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div>
                <Logo />
                <h2 className="my-3">Login</h2>
            </div>
        </div>
    );
};

export default login;