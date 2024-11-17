import { useLoaderData } from "react-router-dom";
import Slider from "./Slider";
import Category from "./Category/Category";
import Hidden from "./Hidden/Hidden";
import Testimonial from "./Testimonial/Testimonial";
import AboutInfo from "./AboutInfo/AboutInfo";
import ContactDetails from "../ContactDetails/ContactDetails";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const residential = useLoaderData();
  console.log("reidence", residential);

  return (
    <div>
      <Helmet>
        <title>Royal Retreat</title>
      </Helmet>
      <Slider></Slider>
      <AboutInfo></AboutInfo>
      <div className="mt-32">
        <div className="text-center mb-10">
          <h1 className="lg:text-xl text-sm font-bold animate__animated animate__bounceIn">Our Services</h1>
          <h3 className="lg:text-5xl text-2xl font-bold nimate__animated animate__bounceIn">
            Ensuring a seamless experience from start to finish
          </h3>
        </div>
        <div className="flex justify-center items-center">
          <div className="grid gap-5 md:grid-cols-3 grid-cols-1 mt-10 mb-10 lg:mx-0 mx-2 ">
            {residential.map((resi) => (
              <Category resi={resi} key={resi.id}></Category>
            ))}
          </div>
        </div>
      </div>

      <Hidden></Hidden>
      <Testimonial></Testimonial>
      <ContactDetails></ContactDetails>
    </div>
  );
};

export default Home;
