/* eslint-disable react/prop-types */
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { RiChat1Line } from "react-icons/ri";

function ServiceCard({ item, index }) {
  const { name, desc, bgColor, textColor, img } = item;

  return (
    <div className="py-[30px] px-3 lg:px-5 ">
      <div className=" mx-auto flex flex-col items-center">
        <img src={img} alt="" />
      </div>
      <h2 className="text-[26px] leading-9 text-headingColor font-[700]">
        {name}
      </h2>
      <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">
        {desc}
      </p>

      <div className="flex items-center justify-between mt-[30px]">
        <Link to="/doctors" className="btn flex gap-2">
          <RiChat1Line className=" text-2xl" />
          Request An Appointment
        </Link>
      </div>
    </div>
  );
}

export default ServiceCard;
