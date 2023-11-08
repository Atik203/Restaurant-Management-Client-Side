import { Helmet } from "react-helmet";
import Banner from "../../Components/Banner/Banner";
import BestSellingFoods from "../../Components/BestSellingFoods/BestSellingFoods";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const axiosSecure = useAxiosSecure();
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    axiosSecure.get("/bestSell").then((res) => setFoodItems(res.data));
  }, [axiosSecure]);

  return (
    <div className="w-11/12 mx-auto">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner></Banner>
      <h1 className="text-3xl font-bold text-center mt-28 md:mt-20">
        Discover Our Best-Selling Dishes
      </h1>
      <p className="text-center text-base p-4 md:text-xl text-gray-600 mt-4">
        Explore our mouthwatering selection of dishes that will elevate your
        dining experience.
      </p>
      <div className="my-10 w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
        {foodItems?.map((foodItem) => (
          <BestSellingFoods
            foodItem={foodItem}
            key={foodItem._id}
          ></BestSellingFoods>
        ))}
      </div>
      <div className="mb-10 text-center mt-16 lg:mt-20">
        <Link to={"/all-food-items"}>
          <button className="btn text-white border-none bg-red-500 hover:text-black hover:bg-gray-300">
            Show All Items
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
