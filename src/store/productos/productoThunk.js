import axios from "axios";
import { ejecutando, obtenerProductos } from "./productoSlice"
import { API_SECURITY } from "../api";

export const thunkObtenerProductos = () => {
    return async (dispatch) => {
        try {
            dispatch(ejecutando())
            const respuesta = await axios({
                url: `${API_SECURITY}/api/v1/products`,
                method: 'GET',
                headers: {
                    'Authorization': localStorage.getItem('token'),
                    'Content-Type': 'application/json'
                }
            })
            dispatch(obtenerProductos(respuesta.data.data.results))

        } catch (error) {
            console.log(error.message);
        }
    }
}