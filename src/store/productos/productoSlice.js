import { createSlice } from '@reduxjs/toolkit';

export const productoSlice = createSlice({
    //nombre del slice con el que se vincula al store
    name: 'producto',
    //declaracion del estado inicial de las variables
    initialState: {
        ejecutandoTransaccion: false,
        mensaje: '',
        productos: []
    },
    //funciones que modifican el estado
    reducers: {
        ejecutando: (state) => {
            state.ejecutandoTransaccion = true;
        },
        obtenerProductos: (state, { payload }) => {
            state.productos = payload
            state.ejecutandoTransaccion = false
        },
        agregarProducto: (state, action) => {

        },
        obtenerProductoPorId: (state, action) => {

        },
        actualizarProducto: (state, action) => {

        },
        eliminarProducto: (state, action) => {

        }
    },
});

export const {
    ejecutando,
    obtenerProductos,
    agregarProducto,
    obtenerProductoPorId,
    actualizarProducto,
    eliminarProducto
} = productoSlice.actions;
