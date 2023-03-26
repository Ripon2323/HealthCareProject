import React from 'react';
import { format } from 'date-fns';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

const BookingModal = ({ date, treatment, setTreatment }) => {
    const { _id, name, slots ,price} = treatment;
    const [user, loading, error] = useAuthState(auth);


    const formattedDate = format(date, 'PP');
    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        //console.log(slot);

        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot,
            price,
            patient: user.email,
            patientName: user.displayName,
            patientAge:event.target.age.value,
            phone: event.target.phone.value,
            disease:event.target.disease.value
        }

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {

                //to close the modal
                console.log(data);
                if (data.success) {
                    toast(`Appoinment is set, ${formattedDate} at ${slot}`)
                }
                else {
                    toast.error(`Already have an appoinment on ${data.booking?.date} at ${data.booking?.slot}`)
                }
                setTreatment(null);
            })


    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-secondary">Booking for:{name}</h3>
                    <form onSubmit={handleBooking} action="" className='grid grid-cols-1 gap-3 justify-items-center'>
                        <input type="text" disabled value={format(date, 'PP')} class="input input-bordered w-full max-w-xs" />
                        <select name='slot' class="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, index) => <option
                                    key={index}
                                    value={slot}>{slot}</option>)
                            }

                        </select>
                        <input type="text" name='name' disabled value={user?.displayName || ''} class="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' disabled value={user?.email || ''} class="input input-bordered w-full max-w-xs" />
                        <input type="text" name='age' placeholder='Your age'  class="input input-bordered w-full max-w-xs" />
                        <input type="text" name='disease' placeholder='Your disease'  class="input input-bordered w-full max-w-xs" />
                        
            
                        <input type="text" name='phone' placeholder="Your Phone Number" class="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" class="btn btn-secondary w-full max-w-xs" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;