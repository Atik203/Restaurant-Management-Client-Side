import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { AuthContext } from "../../Provider/AuthProvider";
import AddedFood from "../../Components/AddedFood/AddedFood";

const AddedFoodItems = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axiosSecure
      .get(`/addedFoods?email=${user?.email}`)
      .then((res) => {
        setFoods(res?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [axiosSecure, user?.email]);

  return (
    <div className="w-11/12 mx-auto my-20">
      <Helmet>
        <title>My Added Items</title>
      </Helmet>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Food Name</th>
              <th>Owner Details</th>
              <th>Price</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {foods?.map((food) => (
              <AddedFood food={food} key={food._id}></AddedFood>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddedFoodItems;
