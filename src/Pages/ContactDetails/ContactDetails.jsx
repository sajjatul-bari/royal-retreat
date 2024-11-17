import { IoLocation, IoMail, IoCall } from "react-icons/io5";

const ContactDetails = () => {
  return (
    <div className="flex lg:flex-row flex-col lg:space-y-0 space-y-10 justify-evenly items-start bg-[#f9f9f9] py-12 px-10 my-10">
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
    </div>
  );
};

export default ContactDetails;
