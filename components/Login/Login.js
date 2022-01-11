import React from 'react';
import Logo from '../Logo/Logo';
import Link from 'next/link';

const login = () => {

    const handleLoginSubmit = () => {

    }

    const handleOnBlur = () => {

    }

    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100">
            <Logo />
            <h2 className="my-3">Login</h2>
            <form className="mb-4 shadow-lg bg-white p-4 p-md-5 rounded-3" onSubmit={handleLoginSubmit}>
                <div
                    className="form-floating mb-3"
                    style={{ width: '320px' }}
                >
                    <input onBlur={handleOnBlur} name="email" type="email" className="form-control" id="floatingLoginEmail" placeholder="name@example.com"
                        required />
                    <label htmlFor="floatingLoginEmail">Email address</label>
                </div>

                <div className="form-floating mb-1">
                    <input onBlur={handleOnBlur} name="password" type="password" className="form-control" id="floatingLoginPassword" placeholder="Password" required />
                    <label htmlFor="floatingLoginPassword">Password</label>
                </div>
                <small><a href="#!" className="text-muted">Forgot Password</a></small>


                <button type="submit" className="btn btn-danger w-100 mt-4 p-2 mb-3">Login</button>


                <span href="/" className="d-flex justify-content-center text-danger fw-light">
                    Create an account
                </span>

            </form>

        </div >
    );
};

export default login;