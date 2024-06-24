import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import BotonLogoutGoogle from './BotonLogoutGoogle'
import { Loading } from '../components/Loading'
import { thunkObtenerCategorias } from '../store/categoria/categoriaThunk'
import { useEffect } from 'react'

const CategoryPage = () => {

  const { name, username, email } = useSelector(state => state.auth);

  const { ejecutandoTransaccion, categorias } = useSelector(state => state.categoria);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(thunkObtenerCategorias());
  }, [])

  return (
    <div className='container animate__animated animate__fadeIn'>
      <hr />
      <h2>CategoryPage</h2>
      <hr />
      <span>Nombre:<span className='text-success'> {name}</span> </span><br />
      <span>Username:<span className='text-success'> {username}</span> </span><br />
      <span>Correo:<span className='text-success'> {email}</span></span>
      <hr />
      <Link to='/admin' className='btn btn-info'>Admin</Link>
      <hr />
      <Link to='/product' className='btn btn-info'>Producto</Link>
      <Link to='/category' />
      <hr />
      <BotonLogoutGoogle />
      <hr />
      <table className="table table-hover">
        <thead>
          <tr>
            <th className='text-center'>ID</th>
            <th className='text-center'>NOMBRE</th>
            <th className='text-center'>DESCRIPCION</th>
            <th className='text-center'>FECHA DE CREACION</th>
            <th className='text-center'>HORA DE CREACION</th>
          </tr>
        </thead>
        <tbody>
          {
            categorias.map(categoria => (
              <tr key={categoria.categoryId}>
                <td className='text-center'>{categoria.categoryId}</td>
                <td className='text-start'>{categoria.name}</td>
                <td className='text-start'>{categoria.description}</td>
                <td className='text-center'>{categoria.dateAt}</td>
                <td className='text-center'>{categoria.hourAt}</td>
              </tr>
            ))
          }
        </tbody>
      </table>

      {ejecutandoTransaccion && <Loading />}
    </div>
  )
}

export default CategoryPage