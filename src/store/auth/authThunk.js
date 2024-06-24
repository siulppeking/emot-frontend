import axios from "axios"
import { checkingCredentials, login, logout } from "./authSlice"
import { API_SECURITY } from "../api"

export const authCheckingCredentials = (email1, password1) => {
    return async (dispatch) => {
        try {
            dispatch(checkingCredentials())
            const response = await axios({
                url: `${API_SECURITY}/api/v1/auth/login`,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: { email: email1, password: password1 }
            })
            const { name, username, email, token } = response.data.data;
            localStorage.setItem('token', token);
            dispatch(login({ name, username, email }))
        } catch (error) {
            let cadena = ''
            if (error.response.data.status === 'VALIDATION_ERRORS') {
                error.response.data.data.errors.map(err => {
                    cadena += err.msg + ', ';
                })
            } else {
                cadena = error.response.data.data.message;
            }
            dispatch(logout({ errorMessage: cadena }))
        }
    }
}

export const authCheckingCredentialsGoogle = (googleToken) => {
    return async (dispatch) => {
        try {
            dispatch(checkingCredentials())
            const response = await axios({
                url: `${API_SECURITY}/api/v1/auth/google`,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: { googleToken }
            })
            const { name, username, email, token } = response.data.data;
            dispatch(login({ name, username, email }))
            localStorage.setItem('email', email);
            localStorage.setItem('token', token);
        } catch (error) {
            let cadena = ''
            if (error.response.data.status === 'VALIDATION_ERRORS') {
                error.response.data.data.errors.map(err => {
                    cadena += err.msg + ', ';
                })
            } else {
                cadena = error.response.data.data.message;
            }
            dispatch(logout({ errorMessage: cadena }))
        }
    }
}
export const authCheckingCredentialsRegister = (email1, password1) => {
    return async (dispatch) => {
        try {
            dispatch(checkingCredentials())
            const response = await axios({
                url: `${API_SECURITY}/api/v1/auth/register`,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: { email: email1, password: password1 }
            })
            const { name, username, email, token } = response.data.data;
            dispatch(login({ name, username, email }))
            localStorage.setItem('token', token);
        } catch (error) {
            let cadena = ''
            if (error.response.data.status === 'VALIDATION_ERRORS') {
                error.response.data.data.errors.map(err => {
                    cadena += err.msg + ', ';
                })
            } else {
                cadena = error.response.data.data.message;
            }
            dispatch(logout({ errorMessage: cadena }))
        }
    }
}