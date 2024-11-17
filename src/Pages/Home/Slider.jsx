// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000, // Adjusted for readability
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-svh"
      >
        {/* First Slide */}
        <SwiperSlide
          className="relative  text-white flex items-center justify-center lg:pt-64 pt-40"
          style={{
            backgroundImage: "url('/slider/house.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay with opacity */}
          <div className="absolute inset-0 bg-black opacity-70"></div>

          <div className="relative text-center  ">
            <div className="max-w-4xl mx-auto lg:space-y-10 space-y-3">
              <h1 className="mb-5 lg:text-7xl text-2xl font-extrabold">
                Modern Family Home
              </h1>
              <p className="lg:text-lg text-sm">
                A modern house with a flat roof, sharp angles, and a mix of
                concrete and metal finishes. Expansive floor-to-ceiling windows
                flood the interior with natural light, highlighting the spacious
                and functional open-plan layout.
              </p>
              <Link to="/category/1">
                <button className="btn mt-10  bg-green-900 border-green-900 text-white hover:text-green-900">
                  More Details
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* Second Slide */}
        <SwiperSlide
          className="relative h-screen text-white flex items-center justify-center lg:pt-64 pt-40"
          style={{
            backgroundImage: "url('/slider/townhouse.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay with opacity */}
          <div className="absolute inset-0 bg-black opacity-70"></div>

          <div className="relative text-center">
            <div className="max-w-5xl mx-auto lg:space-y-10 space-y-3">
              <h1 className="mb-5 lg:text-7xl text-2xl font-extrabold">
                Downtown Apartment
              </h1>
              <p className="mb-5 lg:text-lg text-sm">
                A chic downtown apartment featuring floor-to-ceiling windows
                with stunning city views, modern fixtures, and an open-concept
                living space. Sleek finishes like polished concrete floors and
                stainless steel accents create a sophisticated urban vibe.
              </p>
              <Link to="/category/2">
                <button className="btn mt-10 bg-green-900 border-green-900 text-white hover:text-green-900">
                  More Details
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* third Slide */}
        <SwiperSlide
          className="relative h-screen text-white flex items-center justify-center lg:pt-64 pt-40"
          style={{
            backgroundImage: "url('/slider/apartment.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay with opacity */}
          <div className="absolute inset-0 bg-black opacity-70"></div>

          <div className="relative text-center">
            <div className="max-w-5xl mx-auto space-y-10">
              <h1 className="mb-5 text-7xl font-extrabold">Cozy Cottage</h1>
              <p className="mb-5 text-lg">
                A charming cozy cottage with a stone exterior, wooden shutters,
                and a quaint porch surrounded by lush greenery. Inside, warm
                wooden beams, a fireplace, and soft, inviting decor create a
                peaceful, homey atmosphere.
              </p>
              <Link to="/category/3">
                <button className="btn mt-10 bg-green-900 border-green-900 text-white hover:text-green-900">
                  More Details
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
