import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../assets/images/footer.png';
import Home from '../Home/Home';
import './Footer.css'
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer style={{
            background: `url(${footer})`,
            backgroundSize: 'cover'
        }} className=" p-10 ">
            <div className='footer'>
                <div>
                    <h1 className="footer-title text-blue-900 font-bold text-2xl">Quick Link</h1>
                    <Link className='text-black text-lg hover:text-sky-700 ' to={"/"}>Home</Link>
                    <Link className='text-black text-lg hover:text-sky-700 ' to={"/appoinment"}>Appointment</Link>
                    <Link className='text-black text-lg hover:text-sky-700 ' to={"/services"}>Services</Link>
                    <Link className='text-black text-lg hover:text-sky-700 ' to={"/about"}>About</Link>
                    <Link className='text-black text-lg hover:text-sky-700 ' to={"/login"}>Login</Link>

                </div>
                <div>
                    <h1 className="footer-title text-blue-900 font-bold text-2xl">Services</h1>
                    <Link className='text-black text-lg hover:text-sky-700 ' to={"/"}>Dental Care</Link>
                    <Link className='text-black text-lg hover:text-sky-700 ' to={"/"}>ENT Clinic</Link>
                    <Link className='text-black text-lg hover:text-sky-700 ' to={"/"}>Cardiology</Link>
                    <Link className='text-black text-lg hover:text-sky-700 ' to={"/"}>Precise Diagnosis</Link>
                    <Link className='text-black text-lg hover:text-sky-700 ' to={"/"}>Ambulance Services</Link>

                </div>
                <div>
                    <h1 className="footer-title text-blue-900 font-bold text-2xl">More About Us</h1>
                    <div className="footer-social-link">
                    <ul>
                      <li>
                        <Link to="https://www.facebook.com/">
                          <FaFacebookF />
                        </Link>
                      </li>
                      <li>
                        <Link to="https://twitter.com/">
                          <FaTwitter />
                        </Link>
                      </li>
                      <li>
                        <Link to="https://www.instagram.com/">
                          <FaInstagram />
                        </Link>
                      </li>
                      <li>
                        <Link to="https://www.linkedin.com/">
                          <FaLinkedin />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
            </div>
            <div className='my-10 text-center'>
                <p>Copyright © 2023 - All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;