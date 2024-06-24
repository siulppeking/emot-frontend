// src/components/BotonLogoutGoogle.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { checkingCredentials, logout } from '../store/auth/authSlice';

const BotonLogoutGoogle = () => {
    const dispatch = useDispatch();

    const handleSignOut = () => {
        dispatch(checkingCredentials())

        if (!localStorage.getItem('email')) {
            localStorage.removeItem('token');
            dispatch(logout({ errorMessage: null }))
            return;
        }

        google.accounts.id.disableAutoSelect();
        // Puedes manejar el estado del usuario aquí o en otra parte de tu aplicación
        google.accounts.id.revoke(localStorage.getItem('email'), done => {
            localStorage.removeItem('email');
            localStorage.removeItem('token');
            dispatch(logout({ errorMessage: null }))
        })
    }

    return (
        <button type='button' className='btn btn-danger my-2 my-sm-0' onClick={handleSignOut}>
            Salir
        </button>
    );
};

export default BotonLogoutGoogle;
