import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    //nombre del slice con el que se vincula al store
    name: 'auth',
    //declaracion del estado inicial de las variables
    initialState: {
        status: 'no-authenticated', // 'authenticated' 'no-authenticated' 
        checking: false,
        name: null,
        username: null,
        email: null,
        errorMessage: null
    },
    //funciones que modifican el estado
    reducers: {
        login: (state, { payload }) => {
            state.status = 'authenticated'
            state.checking = false
            state.name = payload.name
            state.username = payload.username
            state.email = payload.email
            state.errorMessage = null
        },
        logout: (state, { payload }) => {
            state.status = 'no-authenticated'
            state.checking = false
            state.name = null
            state.username = null
            state.email = null
            state.errorMessage = payload.errorMessage
        },
        checkingCredentials: (state) => {
            state.status = 'checking'
            state.checking = true;
        }
    },
});

export const { login, logout, checkingCredentials } = authSlice.actions;