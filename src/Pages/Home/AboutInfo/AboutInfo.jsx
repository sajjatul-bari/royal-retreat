import React from "react";
import { Link } from "react-router-dom";

const AboutInfo = () => {
  return (
    <div className=" my-10 mx-10">
      <div className="my-20 text-center">
        <h1 className="text-xl font-bold">About Us</h1>
        <h3 className="text-5xl font-bold">Where dream homes become reality</h3>
      </div>
      <div className="flex justify-center gap-10">
        <div className="w-1/2">
          <img
            className="h-96 rounded-xl"
            src="/images/10-min copy.jpg"
            alt=""
          />
        </div>
        <div className="w-1/2">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
            laudantium reprehenderit minus, odio repudiandae laborum dicta vel
            blanditiis. Sapiente ex iusto eum eaque. Unde nobis officiis
            deleniti, reiciendis facilis optio natus, quasi non quae quam neque
            accusantium ab corrupti maxime veniam corporis eum mollitia aperiam
            perspiciatis fuga repellat fugiat dolor?Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Aperiam amet obcaecati ex rem
            architecto debitis dicta quas perspiciatis eos eligendi. Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Magni optio quis
            corrupti, numquam quidem dicta, eligendi harum facere a veritatis
            doloribus? Nobis animi nisi ducimus possimus itaque dicta ex!
            Incidunt?Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolore quia corporis consequuntur pariatur? Nobis adipisci quam
            fugit vero nostrum nulla at veniam sapiente laborum perspiciatis
            eius eum reiciendis, nisi quo.
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
