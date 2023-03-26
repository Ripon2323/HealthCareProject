import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useToken from '../../Hooks/useToken';

const Login = () => {
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [token] = useToken(user || guser);

    let signInError;
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])

    if (loading || gloading) {
        return <Loading></Loading>
    }
    if (error || gerror) {
        signInError = <p className='text-red-500'>{error?.message || gerror?.message}</p>
    }
    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password);
    }

    return (
        <div>
            <div className='flex h-screen justify-center items-center'>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="text-3xl font-semibold text-center text-purple-700">Login</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class=" text-xl font-bold">Email</span>
                                </label>
                                <input type="email" placeholder="Your Email" class="input input-bordered w-full max-w-xs"
                                    {...register("email",
                                        {
                                            required: {
                                                value: true,
                                                message: 'Email is required'
                                            },
                                            pattern: {
                                                value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                                message: 'Provide a valid email'
                                            }

                                        })
                                    }
                                />
                                <label class="label">
                                    {errors.email?.type === 'required' && <span class="label-text-alt text-red">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span class="label-text-alt text-red">{errors.email.message}</span>}


                                </label>
                            </div>
                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="text-xl font-bold">Password</span>
                                </label>
                                <input type="password" placeholder="Password" class="input input-bordered w-full max-w-xs"
                                    {...register("password",
                                        {
                                            required: {
                                                value: true,
                                                message: 'Password is required'
                                            },
                                            minLength: {
                                                value: 6,
                                                message: 'Must be 6 characters'
                                            }

                                        })
                                    }
                                />
                                <label class="label">
                                    {errors.password?.type === 'required' && <span class="label-text-alt text-red">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span class="label-text-alt text-red">{errors.password.message}</span>}

                                    {signInError}
                                </label>
                            </div>

                            <input class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600" type="submit" value="Login" />
                        </form>
                        <p><small>New to Doctors Portal and want to login as Patient <Link className='text-primary' to='/signUp'>Create new account</Link></small></p>
                        <p><small>New to Doctors Portal and want to login as Doctor <Link className='text-primary' to='/doctorSignUp'>Create new account</Link></small></p>
                        <div class="divider">OR</div>
                        <button onClick={() => signInWithGoogle()} class="btn btn-active btn-accent">Continue With Google</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;