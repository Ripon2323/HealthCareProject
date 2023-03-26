import React from 'react';
import fluoride from '../../assets//images/fluoride.png';
import cavity from '../../assets//images/cavity.png';
import whitening from '../../assets//images/whitening.png';
import Service from './Service';

const Services = () => {
    const services=[
        {
            _id:1,
            name:"Fluoride Treatment",
            description:"Fluoride is a natural mineral that builds strong teeth and prevents cavities. It’s been an essential oral health treatment for decades. Fluoride supports healthy tooth enamel and fights the bacteria that harm teeth and gums.",
            img:fluoride
        },
        {
            _id:2,
            name:"Cavity Filling",
            description:"To treat a cavity your dentist will remove the decayed portion of the tooth and then fill the area on the tooth where the decayed material was removed.",
            img:cavity
        },
        {
            _id:3,
            name:"Teeth Whitening",
            description:"Teeth whitening involves bleaching your teeth to make them lighter. It can't make your teeth brilliant white, but it can lighten the existing colour by several shades.",
            img:whitening
        }
    ]
    return (
        <div className=' my-12'>
            <div className='text-center'>
                <h3 className='text-primary text-xl font-bold uppercase' >Our Services</h3>
                <h2 className='text-4xl'>Servicse we provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service=><Service
                         key={service._id}
                         service={service}
                    
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;