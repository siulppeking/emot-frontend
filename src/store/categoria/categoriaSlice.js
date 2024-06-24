import { createSlice } from '@reduxjs/toolkit';

export const categoriaSlice = createSlice({
    //nombre del slice con el que se vincula al store
    name: 'categoria',
    //declaracion del estado inicial de las variables
    initialState: {
        ejecutandoTransaccion: false,
        mensaje: '',
        categorias: []
    },
    //funciones que modifican el estado
    reducers: {
        ejecutando: (state) => {
            state.ejecutandoTransaccion = true;
        },
        obtenerCategorias: (state, { payload }) => {
            state.categorias = payload
            state.ejecutandoTransaccion = false
        },
        agregarCategoria: (state, action) => {

        },
        obtenerCategoriaPorId: (state, action) => {

        },
        actualizarCategoria: (state, action) => {

        },
        eliminarCategoria: (state, action) => {

        }
    },
});

export const {
    ejecutando,
    obtenerCategorias,
    agregarCategoria,
    obtenerCategoriaPorId,
    actualizarCategoria,
    eliminarCategoria
} = categoriaSlice.actions;
