import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import BotonLogoutGoogle from './BotonLogoutGoogle'

const CategoryPage = () => {

  const { name, username, email } = useSelector(state => state.auth)
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
      <hr />
      <BotonLogoutGoogle />
    </div>
  )
}

export default CategoryPage