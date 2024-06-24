import { useSelector } from 'react-redux'
import BotonLogoutGoogle from './BotonLogoutGoogle';
import { Link } from 'react-router-dom';

const AdminPage = () => {

  const { name, username, email } = useSelector(state => state.auth)

  return (
    <>
      <div className='container animate__animated animate__fadeIn'>

        <h2>AdminPage</h2>
        <hr />
      </div>

    </>

  )
}

export default AdminPage