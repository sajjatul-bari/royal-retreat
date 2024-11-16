import { Helmet } from "react-helmet-async";
import {
  IoCall,
  IoLocation,
  IoMail,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoWhatsapp,
} from "react-icons/io5";

const ContactUs = () => {
  return (
    <div>
      <Helmet>
        <title>Contact Us - Royal Retreat</title>
      </Helmet>
      <div
        className="relative  text-white flex items-center justify-center pt-52 pb-24 "
        style={{
          backgroundImage: "url('/slider/house.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className=" absolute inset-0 bg-black opacity-70"></div>
        <h1 className="absolute text-5xl font-extrabold text-white te">
          Contact Us
        </h1>
      </div>
      <div className="flex mx-10 gap-5">
        <div className=" w-1/2 my-10">
          <div className="rounded-xl bg-white px-10 pb-10 pt-8 ">
            <div className="mb-6 space-y-2">
              <h2 className=" text-3xl font-semibold tracking-tight">
                Let’s Talk!
              </h2>
              <p className=" text-sm text-zinc-500 dark:text-zinc-400">
                Get in touch with us using the enquiry form or contact details
                below.
              </p>
            </div>
            <form className="w-full space-y-6">
              <div className="space-y-2 text-sm text-zinc-900">
                <label className="block font-bold" htmlFor="name">
                  Name
                </label>
                <input
                  className="h-10 w-full rounded-xl border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                  id="name"
                  placeholder="Your Name"
                  name="name"
                  type="text"
                />
              </div>
              <div className="space-y-2 text-sm text-zinc-900 ">
                <label className="block font-bold" htmlFor="_email">
                  Email
                </label>
                <input
                  className="h-10 w-full rounded-xl border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                  id="_email"
                  placeholder="Your Email"
                  name="email"
                  type="email"
                />
              </div>
              <div className="space-y-2 text-sm text-zinc-900">
                <label className="block font-bold" htmlFor="_message">
                  Message
                </label>
                <textarea
                  className="min-h-[80px] w-full rounded-xl border px-3 py-2 leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                  id="_message"
                  placeholder="what's in your mind"
                  name="message"
                />
              </div>
              <button className=" w-full rounded-xl btn bg-green-900 hover:bg-transparent border hover:border-green-900 text-white hover:text-green-900">
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className=" w-1/2 flex flex-col justify-evenly py-12 px-10 my-10 shadow-md bg-gray-100 rounded-xl">
          <div className="flex items-start gap-3">
            <IoLocation className="text-4xl text-green-900"></IoLocation>
            <div>
              <h1 className="text-2xl font-bold">Our Location</h1>
              <p className="text-lg">Dhaka, Bangladesh</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <IoMail className="text-4xl text-green-900"></IoMail>
            <div>
              <h1 className="text-2xl font-bold">Quick Contact</h1>
              <p className="text-lg">Email : studiokolpona@outlook.com</p>
              <p className="text-lg">Support : info@studiokolpona.com</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <IoCall className="text-4xl text-green-900"></IoCall>
            <div>
              <h1 className="text-2xl font-bold">Phone Number</h1>
              <p className="text-lg">+8801842658767</p>
            </div>
          </div>
          <div className="text-green-900 text-5xl flex justify-around">
            <IoLogoFacebook></IoLogoFacebook>
            <IoLogoInstagram></IoLogoInstagram>
            <IoLogoLinkedin></IoLogoLinkedin>
            <IoLogoTwitter></IoLogoTwitter>
            <IoLogoWhatsapp></IoLogoWhatsapp>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
