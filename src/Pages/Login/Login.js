import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link } from 'react-router-dom';

const Login = () => {
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      let signInError;
    if (guser) {
        console.log(guser);
    }
    if(loading||gloading){
        return <Loading></Loading>
    }
    if(error||gerror){
         signInError=<p className='text-red-500'>{error?.message||gerror?.message}</p>
    }
    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email,data.password);
    }

    return (
        <div className='flex h-screen justify-center items-center'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center text-2xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>
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
                                <span class="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password" class="input input-bordered w-full max-w-xs"
                                {...register("password",
                                    {
                                        required: {
                                            value: true,
                                            message: 'Password is required'
                                        },
                                        minLength:{
                                            value:6,
                                            message:'Must be 6 characters'
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

                        <input class="btn w-full max-w-xs text-white" type="submit" value="Login"/>
                    </form>
                    <p><small>New to Doctors Portal? <Link className='text-primary' to='/signUp'>Create new account</Link></small></p>
                    <div class="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} class="btn btn-active btn-accent">Continue With Google</button>

                </div>
            </div>
        </div>
    );
};

export default Login;