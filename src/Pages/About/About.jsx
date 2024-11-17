import { Helmet } from "react-helmet-async";
import ContactDetails from "../ContactDetails/ContactDetails";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About Us - Royal Retreat</title>
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
        <h1 className="absolute lg:text-5xl text-2xl font-extrabold text-white">
          About Us
        </h1>
      </div>
      <div className="my-10 mx-10">
        <p className="lg:text-lg text-sm font-medium mb-2">
          Royal Retreat is a trusted name in the real estate industry, renowned
          for helping individuals and families find properties that perfectly
          suit their lifestyle and aspirations. With a commitment to excellence
          and personalized service, we specialize in offering a diverse range of
          properties, from modern family homes to cozy countryside cottages,
          ensuring every client finds their ideal living space.
        </p>
        <p className="lg:text-lg text-sm font-medium mb-2">
          Our Modern Family Homes are designed to meet the needs of growing
          families, blending contemporary architecture with functional layouts.
          Located in vibrant and secure neighborhoods, these homes offer ample
          space, state-of-the-art amenities, and a nurturing environment perfect
          for raising children.
        </p>
        <p className="lg:text-lg text-sm font-medium mb-2">
          For those who thrive in the heart of the city, our Downtown Apartments
          provide an exceptional urban living experience. These properties
          feature sleek interiors, prime locations, and convenient access to
          cultural, dining, and business hubs, making them an ideal choice for
          professionals and city enthusiasts.
        </p>
        <p className="lg:text-lg text-sm font-medium mb-2">
          If you’re seeking peace and tranquility, our Cozy Cottages offer a
          charming retreat surrounded by nature. These properties are
          thoughtfully designed to provide a warm, inviting atmosphere, perfect
          for those looking to escape the bustle of daily life and enjoy serene,
          picturesque settings.
        </p>
        <p className="lg:text-lg text-sm font-medium mb-2">
          At Royal Retreat, we understand that a home is more than just a place
          to live—it’s where memories are made and dreams come to life. With our
          expertise and dedication, we aim to make your journey to finding the
          perfect home seamless and enjoyable. Let us help you discover your
          dream property today!
        </p>
      </div>
      <ContactDetails></ContactDetails>
    </div>
  );
};

export default About;
