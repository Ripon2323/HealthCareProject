import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

/*
Three ways to store image
1)Third party storage
2)Your own storage in your own server
3)Database: mongodb
4)YUP file:to validate file

*/

const AddDoctor = () => {
    const { register, handleSubmit, watch, formState: { errors },reset } = useForm();
    const { data: services, isLoading } = useQuery('services', () => fetch('http://localhost:5000/service').then(res => res.json()))

    const imageStorageKey='ad38b313ffcf6e78b3b2feb242d8d9da';

    const onSubmit = async data => {
        console.log('data', data);
        const image=data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url=`https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(result=>{
            if(result.success){
                const img=result.data.url;
                const doctor={
                    name:data.name,
                    email:data.email,
                    specialty:data.specialty,
                    img:img
                }

                //send to database
                fetch('http://localhost:5000/doctor',{
                    method:'POST',
                    headers:{
                        'content-type':'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body:JSON.stringify(doctor)
                })
                .then(res=>res.json())
                .then(inserted=>{
                    if(inserted.insertedId){
                        toast.success('Doctor added successfully');
                        reset();
                    }else{
                        toast.error("Doctor doesn't added successfully ");
                    }
                })


            }
        })

    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-2xl'>Add a doctor</h2>
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
                        <span class="label-text">Specialty</span>
                    </label>
                    <select {...register('specialty')} class="select input-bordered w-full max-w-xs">
                        {
                            services.map(service => <option
                                key={service._id}
                                value={service.name}
                            >{service.name}</option>)
                        }

                    </select>
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Photo</span>
                    </label>
                    <input type="file"  class="input input-bordered w-full max-w-xs"
                        {...register("image",
                            {
                                required: {
                                    value: true,
                                    message: 'Image is required'
                                }

                            })
                        }
                    />
                    <label class="label">
                        {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}



                    </label>
                </div>

                <input class="btn w-full max-w-xs text-white" type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddDoctor;