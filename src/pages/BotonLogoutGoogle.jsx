// src/components/BotonLogoutGoogle.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { checkingCredentials, logout } from '../store/auth/authSlice';

const BotonLogoutGoogle = () => {
    const dispatch = useDispatch();

    const handleSignOut = () => {
        dispatch(checkingCredentials())
        google.accounts.id.disableAutoSelect();
        // Puedes manejar el estado del usuario aquí o en otra parte de tu aplicación
        google.accounts.id.revoke(localStorage.getItem('email'), done => {
            localStorage.clear();
            dispatch(logout({ errorMessage: null }))
        })
    }

    return (
        <button className='btn btn-danger' onClick={handleSignOut}>
            Salir
        </button>
    );
};

export default BotonLogoutGoogle;
