import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
      <div className='container animate__animated animate__fadeIn'>

        <div>HomePage EMOT</div>
        <hr />
        <Link className='btn btn-success' to='/auth/login' replace>Login</Link>
      </div>
    </>
  )
}

export default HomePage