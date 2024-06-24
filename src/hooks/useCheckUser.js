import { useDispatch, useSelector } from "react-redux";
import { checkingCredentials, login, logout } from "../store/auth/authSlice";
import { useEffect } from "react";
import axios from "axios";

export const useCheckUser = () => {
    const { status, checking } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        const checkLogin = async () => {
            dispatch(checkingCredentials())
            const token = localStorage.getItem('token');
            if (token !== null) {
                try {
                    const response = await axios({
                        url: `${import.meta.env.VITE_BASE_API_SECURITY}/api/v1/auth/check`,
                        method: 'GET',
                        headers: {
                            'Authorization': token,
                            'Content-Type': 'application/json'
                        }
                    })
                    const { name, username, email } = response.data;
                    dispatch(login({ name, username, email }))
                } catch (error) {
                    dispatch(logout({ errorMessage: null }))
                    localStorage.removeItem('email');
                    localStorage.removeItem('token');
                }
            } else {
                dispatch(logout({ errorMessage: null }))
            }
        }
        checkLogin();
    }, [])

    return {
        status,
        checking
    }
}