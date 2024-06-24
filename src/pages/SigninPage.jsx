import React, { useEffect, useMemo } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Loading } from '../components/Loading';
import BotonLoginGoogle from './BotonLoginGoogle';
import { authCheckingCredentials } from '../store/auth/authThunk';

const SigninPage = () => {

    const dispatch = useDispatch();

    const { register, handleSubmit, formState: {
        errors
    } } = useForm();

    const { status, checking, errorMessage } = useSelector(state => state.auth);

    const navigate = useNavigate();

    useEffect(() => {
        if (status == 'authenticated' && !checking) {
            navigate('/admin', { replace: true });
        }
    }, [status])

    const formOnSubmit = handleSubmit(async (values) => {
        dispatch(authCheckingCredentials(values.email, values.password));
    });

    return (
        <div className="container-fluid animate__animated animate__fadeIn">
            <div className="row d-flex justify-content-center mt-3">
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <div className="card border-primary">
                        <div className="card-header text-center">Login Emot App </div>
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
                                <button className="btn btn-outline-success mt-2" type="submit" disabled={checking}>
                                    Login
                                </button>
                                <Link to={'/'} className="btn btn-outline-warning mt-2 ms-2">
                                    Home
                                </Link>
                                <p className="text-start text-info mt-2">
                                    Don't have an account? <Link to="/auth/register" disabled={checking}>Register</Link>
                                </p>
                                <BotonLoginGoogle />
                            </form>

                        </div>
                    </div>


                </div>
            </div>
            {
                status === 'checking' && <Loading />
            }
        </div>
    )
}

export default SigninPage