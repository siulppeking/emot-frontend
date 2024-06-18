// src/components/SignIn.js
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authCheckingCredentialsGoogle } from '../store/auth/thunk';

const SignIn = ({ onSignIn }) => {

    const dispatch = useDispatch();
    
    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: '689646443064-6l1t64a9dlqq8nbde5b9sih74qfgff32.apps.googleusercontent.com',
            callback: handleCredentialResponse,
        });
        google.accounts.id.renderButton(
            document.getElementById('googleSignInButton'),
            { theme: 'outline', size: 'large' }
        );
    }, []);

    const handleCredentialResponse = (response) => {
        console.log(response.credential);
        dispatch(authCheckingCredentialsGoogle(response.credential))
    };

    return <div id="googleSignInButton"></div>;
};

export default SignIn;
