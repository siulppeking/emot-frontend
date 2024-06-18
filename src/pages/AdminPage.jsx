import { useSelector } from 'react-redux'
import BotonLogoutGoogle from './BotonLogoutGoogle';
import { Link } from 'react-router-dom';

const AdminPage = () => {

  const { name, username, email } = useSelector(state => state.auth)

  return (
    <>
      <div className='container animate__animated animate__fadeIn'>

        <hr />
        <h2>AdminPage</h2>
        <hr />
        <span>Nombre:<span className='text-success'> {name}</span> </span><br />
        <span>Username:<span className='text-success'> {username}</span> </span><br />
        <span>Correo:<span className='text-success'> {email}</span></span>
        <hr />
        <Link to='/category' className='btn btn-info'>Category</Link>
        <hr />
        <Link to='/product' className='btn btn-info'>Producto</Link>
        <hr />
        <BotonLogoutGoogle />
      </div>

    </>

  )
}

export default AdminPage