import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import SingleFoodItemCard from "../../Components/SingleFoodItemCard/SingleFoodItemCard";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const AllFoodItems = () => {
  const [foodItems, setFoodItems] = useState([]);

  const axiosSecure = useAxiosSecure();
  const [count, setCount] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(0);
  const totalPage = Math.ceil(count / itemsPerPage);

  useEffect(() => {
    axiosSecure.get("/foodsCount").then((res) => {
      setCount(res.data);
    });
  }, [axiosSecure]);

  useEffect(() => {
    axiosSecure
      .get(`/foods?page=${currentPage}&size=${itemsPerPage}`)
      .then((res) => {
        setFoodItems(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [axiosSecure, currentPage, itemsPerPage]);

  return (
    <div className="w-11/12 mx-auto">
      <Helmet>
        <title>All Food Items</title>
      </Helmet>
      <h1 className="text-3xl font-bold text-center mt-24 md:mt-20">
        All food Items
      </h1>
      <div className="flex justify-center items-center mt-4 md:mt-6 lg:mt-10 mb-10">
        <form>
          <input
            type="search"
            placeholder="Search Food here..."
            id="searchInput"
            name="name"
            className="bg-base-100 border-2 border-[#DEDEDE] px-4 w-48 md:w-80 h-12 md:h-14 rounded-lg"
          />
        </form>
        <button
          type="submit"
          className="btn btn-primary bg-[#FF444A] rounded-lg h-10 md:h-14 px-6 text-white border-none hover:bg-gray-200 hover:text-black"
        >
          Search
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center my-16">
        {foodItems?.map((foodItem) => (
          <SingleFoodItemCard
            foodItem={foodItem}
            key={foodItem._id}
          ></SingleFoodItemCard>
        ))}
      </div>
    </div>
  );
};

export default AllFoodItems;
