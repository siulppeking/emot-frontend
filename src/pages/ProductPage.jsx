import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import BotonLogoutGoogle from './BotonLogoutGoogle'
import { thunkObtenerProductos } from '../store/productos/productoThunk'
import { useEffect } from 'react'
import { Loading } from '../components/Loading'

const ProductPage = () => {
  const { name, username, email } = useSelector(state => state.auth)

  const { ejecutandoTransaccion, productos } = useSelector(state => state.producto);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(thunkObtenerProductos());
  }, [])

  return (
    <div className='container animate__animated animate__fadeIn'>

      <hr />
      <h2>ProductPage</h2>
      <hr />
      <span>Nombre:<span className='text-success'> {name}</span> </span><br />
      <span>Username:<span className='text-success'> {username}</span> </span><br />
      <span>Correo:<span className='text-success'> {email}</span></span>
      <hr />
      <Link to='/admin' className='btn btn-info'>Admin</Link>
      <hr />
      <Link to='/product' className='btn btn-info'>Producto</Link>
      <hr />
      <BotonLogoutGoogle />
      <hr />
      <table className="table table-hover">
        <thead>
          <tr>
            <th className='text-center'>ID</th>
            <th className='text-center'>NOMBRE</th>
            <th className='text-center'>DESCRIPCION</th>
            <th className='text-center'>PRECIO (S/.)</th>
            <th className='text-center'>DISPONIBLE</th>
            <th className='text-center'>FECHA DE CREACION</th>
          </tr>
        </thead>
        <tbody>
          {
            productos.map(producto => (
              <tr key={producto.productId}>
                <td className='text-center'>{producto.productId}</td>
                <td className='text-start'>{producto.name}</td>
                <td className='text-start'>{producto.description}</td>
                <td className='text-center'>{producto.price}</td>
                <td className='text-center'>{producto.available ? 'DISPONIBLE' : 'NO DISPONIBLE'}</td>
                <td className='text-center'>{producto.createdAt}</td>
              </tr>
            ))
          }
        </tbody>
      </table>

      {ejecutandoTransaccion && <Loading />}
    </div>
  )
}

export default ProductPage