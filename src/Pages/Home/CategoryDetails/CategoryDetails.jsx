import { useLoaderData, useParams } from "react-router-dom";
import { FaLocationDot, FaBuilding } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { Helmet } from "react-helmet-async";

const CategoryDetails = () => {
  const { id } = useParams();
  const propertyDetails = useLoaderData();

  // Ensure ID types match, use parseInt if ids are integers
  const idInt = parseInt(id);
  const property = propertyDetails?.find((property) => property.id === idInt);

  // Check if property exists to avoid errors
  if (!property) {
    return <div>Property not found</div>;
  }

  const {
    estate_title,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    image,
    facilities,
    number_of_bedrooms,
    number_of_bathrooms,
    year_built,
    agent_contact,
  } = property;

  return (
    <div>
      <Helmet>
        <title>{estate_title} - Royal Retreat</title>
      </Helmet>
      <div
        className="relative pt-52 pb-24"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative text-center">
          <div>
            <h1 className="text-5xl text-center font-extrabold text-white">
              {estate_title}
            </h1>
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-10 bg-[#000000] text-white">
        <div className="w-1/2">
          <img src={image} alt="" />
        </div>
        <div className="py-10 flex flex-col justify-center space-y-2 ">
          <h1 className="text-2xl font-bold">Proparty Details : </h1>

          <div className="flex gap-3">
            <p>
              <span className="font-bold">Type</span> : {segment_name}
            </p>
            <p>
              <span className="font-bold">Price</span> : {price}
            </p>
          </div>
          <p>
            <span className="font-bold">Area</span> : {area}
          </p>
          <p>
            <span className="font-bold">Description</span> : {description}
          </p>
          <p>
            <span className="font-bold">Status</span> :
            <span className="badge badge-outline bg-[#f8bd0c] text-black">
              {status}
            </span>
          </p>
          <p className="flex gap-2">
            <span className="font-bold">StatusFacilities</span> :
            <div className="flex gap-2">
              {facilities.map((faci) => (
                <p>{faci}</p>
              ))}
            </div>
          </p>
          <p>
            <span className="font-bold">Number of Bedrooms</span> :
            {number_of_bedrooms}
          </p>
          <p>
            <span className="font-bold">Number of Bathrooms</span> :{" "}
            {number_of_bathrooms}
          </p>
        </div>
      </div>
      <div className="p-10 bg-[#1d4734] text-white">
        <div className="flex justify-evenly">
          <div className="flex gap-2 items-center">
            <FaLocationDot></FaLocationDot>
            {location}
          </div>
          <div className="flex gap-2 items-center">
            <IoMail></IoMail>
            {agent_contact}
          </div>
          <div className="flex gap-2 items-center">
            <FaBuilding></FaBuilding>
            {year_built}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetails;
