


import './About.css'

import { FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";

import Footer from "../Shared/Footer";
import Services2 from "../Sections/Services2";
import Aboutus from '../Sections/Aboutus';

function About() {
  return (
    <div>

      <div className="banner-wraper">
        <div className="page-banner">
          <div className="container">
            <div className="page-banner-entry text-center">
              <h1>About Us</h1>
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to={"/home"}>
                      <FiHome />
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    About Us
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <Aboutus></Aboutus>
      <Services2></Services2>
      <div className='my-6'>
        <Footer></Footer>
      </div>


    </div>
  );
}

export default About;
