import React from 'react';
import { FiHome } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer';
import './Contact.css'
import ContactUs from './ContactUs';

const Contact = () => {
    return (
        <div>

      <div className="banner-wraper">
        <div className="page-banner">
          <div className="container">
            <div className="page-banner-entry text-center">
              <h1>Contact Us</h1>
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to={"/home"}>
                      <FiHome />
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Contact Us
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <ContactUs></ContactUs>
      
      
        <Footer></Footer>
      


    </div>
    );
};

export default Contact;