import React from 'react';
import quote from '../../assets/icons/quote.svg';
import Review from './Review';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';

const Testimonials = () => {
    const reviews=[
        {
            _id:1,
            name:'Winson Harry',
            review:'',
            city:'California',
            img:people1
        },
        {
            _id:2,
            name:'Winson Harry',
            review:'',
            city:'California',
            img:people2
        },
        {
            _id:3,
            name:'Winson Harry',
            review:'',
            city:'California',
            img:people3
        },
    ]
    return (
        <section className='my-28'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-xl text-primary font-bold'>Testimonials</h4>
                    <h2 className='text-3xl'>What our patient says</h2>
                </div>
                <div>
                    <img className='w-48 lg:w-24' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                 {
                    reviews.map(review=><Review
                        key={review._id}
                        review={review}
                    
                    ></Review>)
                 }
            </div>
        </section>
    );
};

export default Testimonials;