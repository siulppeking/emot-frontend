import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authCheckingCredentialsRegister } from '../store/auth/authThunk';

const SignupPage = () => {

    const dispatch = useDispatch();

    const errorMessage = null;

    const { register, handleSubmit, formState: {
        errors
    } } = useForm();

    const formOnSubmit = handleSubmit(async (values) => {
        dispatch(authCheckingCredentialsRegister(values.email, values.password))
    })

    return (
        <>
            <div className="container-fluid animate__animated animate__fadeIn">
                <div className="row d-flex justify-content-center mt-3">
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <div className="card border-primary">
                            <div className="card-header text-center">Register EMOT App 👨‍💻</div>
                            <div className="card-body">
                                {
                                    errorMessage &&
                                    <div className="alert alert-danger" role="alert">
                                        {errorMessage}
                                    </div>
                                }
                                <form onSubmit={formOnSubmit} >
                                    <input type="email"
                                        className="form-control mt-2"
                                        placeholder="Email Address"
                                        autoComplete="off"
                                        {...register('email', { required: true })}
                                    />
                                    {errors.email && <p className='text-danger'>Email is required</p>}
                                    <input type="password"
                                        className="form-control mt-2"
                                        placeholder="Password"
                                        {...register('password', { required: true })}
                                    />
                                    {errors.password && <p className='text-danger'>Password is required</p>}
                                    <button className="btn btn-outline-success mt-2" type="submit">
                                        Register
                                    </button>
                                    <p className="text-start text-info mt-2">Already have an account? <Link to="/auth/login">Login</Link></p>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default SignupPage