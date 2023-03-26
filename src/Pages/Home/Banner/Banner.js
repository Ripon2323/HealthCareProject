import React from 'react';
import { Link } from 'react-router-dom';
import chair from '../../../assets/images/chair.png';
import PrimaryButton from '../../Shared/PrimaryButton';

const Banner = () => {
    return (
        <div class="hero min-h-screen ">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="rounded-lg lg:w-1/2 shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold">Protecting and taking care of your health</h1>
                    <p class="py-6">We provide the special tips and advice’s of heath care treatment and high level of best technology involve in the our hospital.</p>
                    <Link to={'/login'}><PrimaryButton>Get Started</PrimaryButton></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;