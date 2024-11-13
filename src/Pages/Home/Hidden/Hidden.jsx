import React from "react";
import { FaRegFileAlt, FaBuilding } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";

const Hidden = () => {
  return (
    <div className="grid grid-cols-2 my-10 mx-10">
      <div className="  p-20 bg-[#1d4734] text-white space-y-2 rounded-tl-2xl">
        <h1 className="text-5xl font-semibold ">
          Communicate the unique or rare nature of the properties.
        </h1>
      </div>
      <div className=" p-20 space-y-2">
        <FaBuilding className="text-5xl"></FaBuilding>
        <h1 className="text-xl font-semibold">
          FREE REGISTRATION NO HIDDEN FEES
        </h1>
        <p>I'm a paragraph. Click here to add your own text and edit me.</p>
      </div>
      <div className="p-20  space-y-2">
        <FaRegFileAlt className="text-5xl"></FaRegFileAlt>
        <h1 className="text-xl font-semibold">
          FREE REGISTRATION NO HIDDEN FEES
        </h1>
        <p>I'm a paragraph. Click here to add your own text and edit me.</p>
      </div>
      <div className="  p-20 bg-[#1d4734] text-white space-y-2 rounded-br-2xl">
        <FaMapLocationDot className="text-5xl"></FaMapLocationDot>
        <h1 className="text-xl font-semibold">OFFICES IN 4 LOCATIONS</h1>
        <p>I'm a paragraph. Click here to add your own text and edit me.</p>
      </div>
    </div>
  );
};

export default Hidden;
