import React from "react";
import { FaRegFileAlt, FaBuilding } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";

const Hidden = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 my-10 lg:mx-10 mx-5">
      <div className="lg:p-20 p-10 bg-[#1d4734] text-white space-y-2 rounded-tl-2xl">
        <h1 className="lg:text-5xl text-2xl font-semibold ">
          Communicate the unique or rare nature of the properties.
        </h1>
      </div>
      <div className="lg:p-20 p-10 space-y-2">
        <FaBuilding className="text-5xl"></FaBuilding>
        <h1 className="lg:text-xl text-lg font-semibold">
          FREE REGISTRATION NO HIDDEN FEES
        </h1>
        <p>I'm a paragraph. Click here to add your own text and edit me.</p>
      </div>
      <div className="lg:p-20 p-10 space-y-2">
        <FaRegFileAlt className="text-5xl"></FaRegFileAlt>
        <h1 className="lg:text-xl text-lg font-semibold">
          FREE REGISTRATION NO HIDDEN FEES
        </h1>
        <p>I'm a paragraph. Click here to add your own text and edit me.</p>
      </div>
      <div className="lg:p-20 p-10 bg-[#1d4734] text-white space-y-2 rounded-br-2xl">
        <FaMapLocationDot className="text-5xl"></FaMapLocationDot>
        <h1 className="lg:text-xl text-lg font-semibold">OFFICES IN 4 LOCATIONS</h1>
        <p>I'm a paragraph. Click here to add your own text and edit me.</p>
      </div>
    </div>
  );
};

export default Hidden;
