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
      setCount(res.data.count);
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

  const pages = [...Array(totalPage).keys()];

  const handleItemsPerPage = (e) => {
    const val = parseInt(e.target.value);
    setItemsPerPage(val);
    setCurrentPage(0);
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="w-11/12 mx-auto mb-20">
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
      <div className="flex justify-center items-center gap-3 text-lg">
        <div>
          <h1>Show: </h1>
        </div>
        <div className="font-medium">
          <select
            value={itemsPerPage}
            onChange={handleItemsPerPage}
            name=""
            id=""
            className="border-2 border-gray-400"
          >
            <option value="6">6</option>
            <option value="9">9</option>
            <option value="15">15</option>
            <option value="25">25</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center my-16">
        {foodItems?.map((foodItem) => (
          <SingleFoodItemCard
            foodItem={foodItem}
            key={foodItem._id}
          ></SingleFoodItemCard>
        ))}
      </div>
      <div className="pagination">
        <button
          className="bg-gray-300 text-black px-4 py-2 rounded-md"
          onClick={handlePreviousPage}
        >
          Prev
        </button>
        {pages?.map((page) => (
          <button
            onClick={() => setCurrentPage(page)}
            className={`paginationButton ${
              currentPage === page
                ? "bg-red-500 px-4 py-2 rounded-md text-white"
                : "bg-gray-300 text-black px-4 py-2 rounded-md"
            }`}
            key={page}
          >
            {page + 1}
          </button>
        ))}
        <button
          className="bg-gray-300 text-black px-4 py-2 rounded-md"
          onClick={handleNextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllFoodItems;
