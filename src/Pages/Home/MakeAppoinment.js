import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appoinment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';


const MakeAppoinment = () => {
    return (
        <section style={{background:`url(${appoinment})`}} className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 px-5'>
                <h3 className=' text-xl text-primary font-bold'>Appoinment</h3>
                <h2 className='text-3xl text-white py-5'>Make an appoinment today</h2>
                <p className='text-white pb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis fuga saepe dolore, quis sunt, quos eligendi itaque adipisci odit numquam omnis corrupti maxime asperiores commodi hic. Illum et sit minus adipisci quae sequi, accusantium ipsum? Dolore vero eligendi assumenda aperiam.</p>
                <PrimaryButton>Get Started</PrimaryButton>

            </div>
        </section>
    );
};

export default MakeAppoinment;