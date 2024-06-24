import axios from "axios";
import { ejecutando, obtenerProductos } from "./productoSlice"

export const thunkObtenerProductos = () => {
    return async (dispatch) => {
        try {
            dispatch(ejecutando())
            const respuesta = await axios({
                url: `${import.meta.env.VITE_BASE_API_SECURITY}/api/v1/products`,
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