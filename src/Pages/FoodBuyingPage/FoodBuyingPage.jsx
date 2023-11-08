import { Helmet } from "react-helmet";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
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
  const { _id, name, img, quantity, count, price, category, description } =
    foodItem;

  const handleBuy = (e) => {
    e.preventDefault();
    const date = e.target.date.value;
    const email = user?.email;
    const orderedData = { email, name, img, quantity, price, category, date };

    const newCount = count + 1;
    const newQuantity = quantity - 1;
    const updatedData = { count: newCount, quantity: newQuantity };

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, confirm it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .post(`/orderedFoods`, { orderedData })
          .then((res) => {
            Swal.fire({
              title: "Success!",
              text: "Your order has been done.",
              icon: "success",
            });
          })
          .then((error) => console.log(error));

        axiosSecure.patch(`/foods/${_id}`, { updatedData }).then((res) => {
          console.log(res);
          setFoodItem({ ...foodItem, quantity: newQuantity });
        });
      }
    });
  };

  return (
    <div className="w-10/12 mx-auto mt-20 mb-20 min-h-screen">
      <Helmet>
        <title>Purchase Page</title>
      </Helmet>
      <img src={img} className="md:h-[400px] lg:h-[800px] w-full" alt="" />
      <div className="p-4">
        <h1 className="text-red-500 font-bold text-2xl my-3">
          Food Name:{name}
        </h1>
        <h1 className="font-bold my-3">Available Food Quantity:{quantity}</h1>
        <p className="text-base mt-2 text-justify">
          Price: <span className="text-red-500 font-medium">{price}$</span>
        </p>
        <h1>Buyer Name: {user?.displayName}</h1>
        <h1>Buyer Email: {user?.email}</h1>
      </div>
      <form action="" onSubmit={handleBuy}>
        <div className="">
          {quantity > 0 ? (
            <button className="btn ml-4 text-white border-none bg-red-500 hover:text-black hover:bg-gray-300">
              Buy Now
            </button>
          ) : (
            <h1 className="text-gray-400 font-medium text-base">
              You can't buy at this time. Food is currently sold out.....
            </h1>
          )}
          <input type="date" name="date" id="" required className="ml-20" />
        </div>
      </form>
    </div>
  );
};

export default FoodBuyingPage;
