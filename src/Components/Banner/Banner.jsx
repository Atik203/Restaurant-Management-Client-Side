import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { Link } from "react-router-dom";
// ..

const Banner = () => {
  return (
    <div className="mx-auto ">
      <div className="relative">
        <img
          src={"https://i.ibb.co/2kkFnXF/waiting-order.jpg"}
          className="h-[350px] md:h-[400px] lg:h-[700px] w-full transition-opacity opacity-50"
        />
      </div>
      <div
        className="w-2/3 mx-auto absolute top-60 md:top-60 lg:top-72 -mt-10 md:-mt-20 ml-12 md:ml-24 lg:-mt-8 lg:ml-44"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <h1 className="text-2xl md:text-3xl my-3 md:my-5 lg:text-5xl text-center text-red-500 font-bold">
          Manage Your Restaurant <br /> with Ease
        </h1>
        <h3 className="text-center font-medium text-base md:text-xl">
          Streamline your restaurant operations and delight your customers.{" "}
          <br />
          We provide the tools you need for success.
        </h3>
        <div className="text-center mt-2 md:mt-4">
          <Link
            to={"/all-food-items"}
            className="btn text-center text-sm md:text-base bg-red-500 text-white border-none hover:text-black hover:bg-gray-200"
          >
            Explore More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
AOS.init();
