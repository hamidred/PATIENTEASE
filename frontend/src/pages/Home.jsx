import React from "react";

import heroImg04 from "../assets/images/hero-img04.png";

import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";

import faqImg from "../assets/images/faq-img.png";

import { RiChat1Line } from "react-icons/ri";

import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/About/About";

import ServiceList from "../components/Services/ServiceList";
import DoctorList from "../components/Doctors/DoctorList";
import FaqList from "../components/Faq/FaqList";
import Testimonial from "../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      {/* hero section */}

      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            <div>
              <div className="lg:w-[570px]">
                <h1
                  className="text-[36px] leading-[46px] text-headingColor font-[800] 
                md:text-[60px] md:leading-[70px]"
                >
                  A dedicated doctor you can trust{" "}
                </h1>
                <p className="text__para">
                  Connect with trusted doctors anytime, anywhere. Skip the wait,
                  book easily, and get expert care when you need it. Your
                  health, simplified.
                </p>
                <button className="btn flex gap-2">
                  {" "}
                  <RiChat1Line className=" text-2xl" />
                  Request An Appointment
                </button>
              </div>

              <div
                className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 
                 lg:gap-[30px]"
              >
                <div>
                  <h2
                    className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
                   text-headingColor"
                  >
                    24h
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">All day Service</p>
                </div>

                <div>
                  <h2
                    className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
                   text-headingColor"
                  >
                    10+
                  </h2>
                  <span className="w-[100px] h-2 bg-purple-300 rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Clinic Location</p>
                </div>

                <div>
                  <h2
                    className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
                   text-headingColor"
                  >
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Patient Satisfaction</p>
                </div>
              </div>
            </div>

            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full" src={heroImg04} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Work section */}

      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Get The Best Medical Services
            </h2>
            <p className="text__para text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,
              debitis!
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] 
          mt-[30px] lg:mt-[55px]"
          >
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Chose A Location
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
                  dolorem officia, laudantium numquam eum sit obcaecati tempore
                  consequatur?
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center group
                   hover:bg-primaryColor hover:border-none justify-center"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find A Doctor
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Repellat quisquam quis non distinctio odio ducimus.
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center group
                   hover:bg-primaryColor hover:border-none justify-center"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Book Appointment
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quaerat voluptatibus fuga iste similique odit accusamus.
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center group
                   hover:bg-primaryColor hover:border-none justify-center"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About section */}

      <About />

      {/* Services section */}

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Medical Services</h2>
            <p className="text__para text-center">
              World-Class Care For Everyone. Our Health System Offers Unmatched,
              Expert Health Care.
            </p>
          </div>

          <ServiceList />
        </div>
      </section>

      {/* Feature section */}

      <div className="container flex flex-col items-center">
        <h3 className="text-green-500 text-xl mb-6">Book an appointment</h3>
        <div className="flex flex-col items-center justify-center bg-blue-500 text-white py-10 px-5 rounded-2xl shadow-lg relative">
          {/* Background Elements */}
          <div className="absolute top-0 left-10 bg-teal-300 w-4 h-4 rounded-sm transform rotate-45"></div>
          <div className="absolute bottom-0 right-10 bg-teal-300 w-6 h-6 rounded-sm transform rotate-45"></div>
          <div className="absolute top-10 right-20 bg-teal-300 w-3 h-3 rounded-sm transform rotate-45"></div>
          <div className="absolute bottom-10 left-20 bg-teal-300 w-5 h-5 rounded-sm transform rotate-45"></div>

          {/* Content */}

          <h1 className="text-2xl font-bold mb-4">
            Schedule a virtual or presential appointment today
          </h1>
          <p className="text-center mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            egestas viverra turpis habitant eu sociis fermentum felis,Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Egestas egestas
            viverra turpis habitant eu sociis fermentum felis.
          </p>

          {/* Button */}
          <button className="flex items-center gap-2 bg-white text-blue-500 font-semibold px-4 py-2 rounded-full shadow-md hover:bg-gray-100 transition">
            <RiChat1Line className="w-5 h-5" />
            Book an appointment
          </button>
        </div>
      </div>

      {/* Doctors section */}

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Great Doctors</h2>
            <p className="text__para text-center">
              World-Class Care For Everyone. Our Health System Offers Unmatched,
              Expert Health Care.
            </p>
          </div>

          <DoctorList />
        </div>
      </section>

      {/* FAQ section */}

      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img src={faqImg} alt="" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="heading">Most Questions By Our Beloved Patient</h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>

      {/* testimonial */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">What Our Patients Say</h2>
            <p className="text__para text-center">
              World-Class Care For Everyone. Our Health System Offers Unmatched,
              Expert Health Care.
            </p>
          </div>

          <Testimonial />
        </div>
      </section>
    </>
  );
};

export default Home;
