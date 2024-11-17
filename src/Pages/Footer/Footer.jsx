import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoWhatsapp,
} from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-black text-white lg:p-10 p-5 ">
        <div className="flex lg:flex-row flex-col w-full lg:px-10 px-1 lg:space-y-0 space-y-10">
          <div className="lg:w-3/12 w-full flex flex-col lg:justify-normal justify-center lg:items-start items-center ">
            <img
              className="lg:h-40 h-32"
              src="../../../public/logo.png"
              alt=""
            />
            <div className="text-white text-3xl flex gap-5  mt-2">
              <IoLogoFacebook></IoLogoFacebook>
              <IoLogoInstagram></IoLogoInstagram>
              <IoLogoLinkedin></IoLogoLinkedin>
              <IoLogoTwitter></IoLogoTwitter>
              <IoLogoWhatsapp></IoLogoWhatsapp>
            </div>
          </div>
          <div className="lg:w-3/12 w-full lg:text-left text-center">
            <h6 className="text-2xl font-semibold text-green-700 pb-5">
              Company
            </h6>
            <div className="flex flex-col gap-5 font-semibold">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About Us</NavLink>
              <NavLink to="/contact">Contact Us</NavLink>
              <NavLink to="/register">Register</NavLink>
            </div>
          </div>
          <div className="lg:w-3/12 w-full lg:text-left text-center">
            <h6 className="text-2xl font-semibold text-green-700 pb-5">
              Services
            </h6>
            <div className="flex flex-col gap-5 font-semibold">
              <NavLink to="/category/1">Modern Family Home</NavLink>
              <NavLink to="/category/2">Downtown Apartment</NavLink>
              <NavLink to="/category/3">Cozy Cottage</NavLink>
            </div>
          </div>
          <div className="lg:w-3/12 w-full lg:space-y-5 space-y-3 lg:text-left text-center">
            <h1 className="text-2xl">Get Subscribed Today!</h1>
            <p>
              Stay Updated! Sign up for our latest news, insights, and offers.
            </p>
            <div>
              <input
                type="text"
                className="px-2 py-2 rounded-l-xl text-black"
                placeholder="Enter email"
              />
              <button className="p-2 bg-green-900 hover:bg-white hover:text-green-900 rounded-e-xl">
                send
              </button>
            </div>
          </div>
        </div>
      </footer>
      <footer className=" text-center bg-green-900 text-white px-10 py-5">
        <h3 className="lg:text-lg text-sm">©2024. Royal Retreat. All Rights Reserved.</h3>
      </footer>
    </div>
  );
};

export default Footer;
