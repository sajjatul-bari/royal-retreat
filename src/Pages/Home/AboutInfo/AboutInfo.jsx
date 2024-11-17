import React from "react";
import { Link } from "react-router-dom";
import "animate.css";

const AboutInfo = () => {
  return (
    <div className=" my-10 mx-10">
      <div className="my-20 text-center">
        <h1 className="lg:text-xl text-sm font-bold animate__animated animate__backInRight font-montserrat">
          About Us
        </h1>
        <h3 className="lg:text-5xl text-2xl font-bold animate__animated animate__backInLeft font-poppins">
          Where dream homes become reality
        </h3>
      </div>
      <div className="flex justify-center lg:flex-row flex-col gap-10">
        <div className="lg:w-1/2 w-full">
          <img
            className="lg:h-96 h-80 rounded-xl"
            src="/images/10-min copy.jpg"
            alt=""
          />
        </div>
        <div className="lg:w-1/2 w-full font-montserrat">
          <p className="lg:text-lg font-medium text-sm">
            Royal Retreat is a trusted name in the real estate industry,
            renowned for helping individuals and families find properties that
            perfectly suit their lifestyle and aspirations. With a commitment to
            excellence and personalized service, we specialize in offering a
            diverse range of properties, from modern family homes to cozy
            countryside cottages, ensuring every client finds their ideal living
            space.
          </p>
          <p className="lg:text-lg font-medium text-sm mt-2">
            Our Modern Family Homes are designed to meet the needs of growing
            families, blending contemporary architecture with functional
            layouts. Located in vibrant and secure neighborhoods...
          </p>
          <Link to="/about">
            <button className="btn rounded-xl bg-green-900 hover:bg-transparent border hover:border-green-900 text-white hover:text-green-900  mt-6">
              More Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
