import React from "react";
import { Link } from "react-router-dom";
import 'animate.css';


const AboutInfo = () => {
  return (
    <div className=" my-10 mx-10">
      <div className="my-20 text-center">
        <h1 className="lg:text-xl text-sm font-bold animate__animated animate__backInRight">About Us</h1>
        <h3 className="lg:text-5xl text-2xl font-bold animate__animated animate__backInLeft">Where dream homes become reality</h3>
      </div>
      <div className="flex justify-center lg:flex-row flex-col gap-10">
        <div className="lg:w-1/2 w-full">
          <img
            className="lg:h-96 h-80 rounded-xl"
            src="/images/10-min copy.jpg"
            alt=""
          />
        </div>
        <div className="lg:w-1/2 w-full">
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
