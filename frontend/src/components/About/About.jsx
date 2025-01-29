import React from "react";

import { RiChat1Line } from "react-icons/ri";
import { Link } from "react-router-dom";

import aboutImg from "../../assets/images/about.png";
import aboutCardImg from "../../assets/images/about-card.png";

function About() {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:first-letter:order-1">
            <img src={aboutImg} alt="" />
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
              <img src={aboutCardImg} alt="" />
            </div>
          </div>

          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading">
              A dedicated doctor with the core mission to help
            </h2>
            <p className="text__para">
              Welcome to Our Doctor Appointment App! Your one-stop solution for
              seamless healthcare access. Easily book appointments, access
              medical records, and receive personalized care—all in one place.
            </p>

            <p className="text__para mt-[30px]">
              Experience Hassle-Free Healthcare! Our innovative platform
              simplifies the booking process, provides real-time doctor
              availability, and ensures secure communication with healthcare
              professionals. Get the care you need, when you need it!
            </p>

            <Link to="/">
              <button className="btn flex gap-4">
                <RiChat1Line className=" text-2xl" />
                Get Appointment Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
