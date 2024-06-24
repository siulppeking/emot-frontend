import axios from "axios";
import { ejecutando, obtenerCategorias } from "./categoriaSlice"
import { useNavigate } from "react-router-dom";

export const thunkObtenerCategorias = () => {
    //const navigate = useNavigate();

    return async (dispatch) => {
        try {
            dispatch(ejecutando())
            const respuesta = await axios({
                url: `${import.meta.env.VITE_BASE_API_SECURITY}/api/v1/categories`,
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem('token')
                }
            })
            dispatch(obtenerCategorias(respuesta.data.data))
        } catch (error) {
            console.log(error);
            //console.log(error.message);

            /*navigate('/auth/login', {
                replace: true
            })*/
        }
    }
}