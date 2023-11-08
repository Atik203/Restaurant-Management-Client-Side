import { Helmet } from "react-helmet";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
const FoodBuyingPage = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [foodItem, setFoodItem] = useState([]);

  useEffect(() => {
    axiosSecure.get(`/SingleFood/${id}`).then((data) => setFoodItem(data.data));
  }, [id, axiosSecure]);
  const {
    _id,
    name,
    img,
    quantity,
    category,
    price,
    madeBy,
    description,
    ingredients,
    origin,
  } = foodItem;

  return (
    <div className="w-11/12 mx-0 min-h-screen">
      <Helmet>
        <title>Buying Food</title>
      </Helmet>
      <h1></h1>
      <p className="text-base mt-2 text-justify">
        Available Food Quantity:
        <span className="text-red-500 text-lg font-medium"> {quantity}</span>
      </p>

      <div>
        {quantity > 0 ? (
          <Link to={`/BuyFood/${_id}`}>
            <button className="btn text-white border-none bg-red-500 hover:text-black hover:bg-gray-300">
              Buy Now
            </button>
          </Link>
        ) : (
          <h1 className="text-gray-400 font-medium text-base">
            You can't buy at this time. Food is currently sold out.....
          </h1>
        )}
      </div>
    </div>
  );
};

export default FoodBuyingPage;
