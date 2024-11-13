import ContactDetails from "../ContactDetails/ContactDetails";

const About = () => {
  return (
    <div>
      <div
        className="relative  text-white flex items-center justify-center pt-52 pb-24 "
        style={{
          backgroundImage: "url('/slider/house.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className=" absolute inset-0 bg-black opacity-70"></div>
        <h1 className="absolute text-5xl font-extrabold text-white">
          About Us
        </h1>
      </div>
      <div className="my-10 mx-10">
        <p className="texl-lg ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae veniam porro quidem, doloremque saepe alias corporis reiciendis sunt pariatur sit. Cum impedit deleniti incidunt exercitationem suscipit. Labore ea laudantium fugiat atque cumque impedit excepturi, ut fuga rem alias! Ullam odit explicabo iste aspernatur eum accusantium. Laboriosam consequuntur iste iure in harum blanditiis. Aliquam at fugit, culpa temporibus laboriosam vero voluptates ex nisi doloremque possimus, nemo maxime voluptatibus natus voluptas architecto animi veritatis pariatur? Quos dicta laborum praesentium commodi explicabo ab quae laudantium sunt eaque. Explicabo laborum, reprehenderit nihil tempore consectetur harum perspiciatis quod doloribus iste ut eius ipsa totam soluta? Quisquam, pariatur reprehenderit? Quis nesciunt voluptatem consequuntur odio numquam ea perferendis quam libero dicta beatae accusamus accusantium sit, voluptas in error ut. Soluta atque porro minus alias quae sequi totam mollitia impedit voluptas cupiditate necessitatibus sunt rerum laudantium eius excepturi saepe modi similique, quo beatae accusantium illum minima sed deserunt quam! Magni ad laborum iusto iste, numquam neque provident fuga? Voluptatum vero possimus officia perspiciatis beatae quam sapiente. Aliquam laborum non nostrum tenetur, blanditiis voluptatibus aspernatur recusandae voluptates accusamus sint, doloremque quis ipsa doloribus officiis quia velit eveniet ipsum mollitia facilis quos et eaque quam? Quidem, quod eaque? Fugit, debitis.</p>
      </div>
      <ContactDetails></ContactDetails>
    </div>
  );
};

export default About;
