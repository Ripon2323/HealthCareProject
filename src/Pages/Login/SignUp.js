import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useNavigate } from 'react-router-dom';
import useToken from '../../Hooks/useToken';

const SignUp = () => {

    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [displayAge, setDisplayAge] = useState(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [token] = useToken(user || guser);
    let signInError;
    const navigate = useNavigate();
    if (token) {
        //console.log(guser);
        navigate('/appoinment');
    }
    if (loading || gloading || updating) {
        return <Loading></Loading>
    }
    if (error || gerror || updateError) {
        signInError = <p className='text-red-500'>{error?.message || gerror?.message}</p>
    }
    const onSubmit = async data => {
        console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name })

        console.log("update done");

    }

    return (
        <div className='flex h-screen justify-center items-center'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center text-2xl font-bold">SignUp</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" class="input input-bordered w-full max-w-xs"
                                {...register("name",
                                    {
                                        required: {
                                            value: true,
                                            message: 'Name is required'
                                        }

                                    })
                                }
                            />
                            <label class="label">
                                {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}



                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Age</span>
                            </label>
                            <input type="text" placeholder="Your Age" class="input input-bordered w-full max-w-xs"
                                {...register("age",
                                    {
                                        required: {
                                            value: true,
                                            message: 'Age is required'
                                        }

                                    })
                                }
                            />
                            <label class="label">
                                {errors.age?.type === 'required' && <span class="label-text-alt text-red-500">{errors.age.message}</span>}



                            </label>
                        </div>
                       


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
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}


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

                        <input class="btn w-full max-w-xs text-white" type="submit" value="SignUp" />
                    </form>
                    <p><small>Already have an account? <Link className='text-primary' to='/login'>Please Login</Link></small></p>
                    <div class="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} class="btn btn-active btn-accent">Continue With Google</button>

                </div>
            </div>
        </div>
    );
};

export default SignUp;