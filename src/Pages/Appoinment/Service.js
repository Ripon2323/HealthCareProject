import React from 'react';

const Service = ({ service,setTreatment }) => {
    const {name,slots,price}=service;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title text-secondary">{name}</h2>
                <p>
                    {
                        slots.length>0
                        ?<span>{slots[0]}</span>
                        :<span className='text-red-500'>No slots available</span>
                    }
                </p>
                <p>{slots.length} {slots.length>1?'spaces':'space'} available</p>
                <p><small>Price:${price}</small></p>
                <div class="card-actions justify-center">
                    
                     <label 
                     for="booking-modal" 
                     disabled={slots.length===0}
                     onClick={()=>setTreatment(service)}
                     className="btn btn-secondary text-white uppercase">Book Appoinment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;