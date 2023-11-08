import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Skeleton from "react-loading-skeleton";
import FoodDetails from "../../Components/FoodDetails/FoodDetails";
import { Helmet } from "react-helmet";

const SingleFoodDetails = () => {
  const axiosSecure = useAxiosSecure();

  const { id } = useParams();
  const [foodItem, setFoodItem] = useState([]);

  useEffect(() => {
    axiosSecure.get(`/SingleFood/${id}`).then((data) => setFoodItem(data.data));
  }, [id, axiosSecure]);

  return (
    <div className="w-11/12 mx-auto my-20">
      <Helmet>
        <title>Food Details</title>
      </Helmet>

      {foodItem ? (
        <FoodDetails foodItem={foodItem} key={foodItem._id}></FoodDetails>
      ) : (
        <Skeleton count={5} />
      )}
    </div>
  );
};

export default SingleFoodDetails;
