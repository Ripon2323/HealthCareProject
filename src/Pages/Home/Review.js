import React from 'react';

const Review = ({ review }) => {
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">

                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat ut sapiente dolor ad quod voluptates?</p>
                <div class="flex items-center">
                    <div class="avatar">
                        <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={review.img} alter="" />
                        </div>

                    </div>
                    <div>
                        <h2 className='text-xl'>{review.name}</h2>
                        <h4>{review.city}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;