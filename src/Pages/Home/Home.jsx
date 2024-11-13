import { useLoaderData } from "react-router-dom";
import Slider from "./Slider";
import Category from "./Category/Category";
import Hidden from "./Hidden/Hidden";
import Testimonial from "./Testimonial/Testimonial";
import AboutInfo from "./AboutInfo/AboutInfo";
import ContactDetails from "../ContactDetails/ContactDetails";

const Home = () => {
  const residential = useLoaderData();
  console.log("reidence", residential);

  return (
    <div>
      <Slider></Slider>
      <AboutInfo></AboutInfo>
      <div className="mt-32">
        <div className="text-center mb-10">
          <h1 className="text-xl font-bold">Our Services</h1>
          <h3 className="text-5xl font-bold">
            Ensuring a seamless experience from start to finish
          </h3>
        </div>
        <div className="flex justify-center items-center">
          <div className="grid gap-5 md:grid-cols-3 grid-cols-1 mt-10 mb-10 ">
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
