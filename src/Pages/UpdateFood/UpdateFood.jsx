import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

const UpdateFood = () => {
  const axiosSecure = useAxiosSecure();
  const [foodItem, setFoodItem] = useState([]);
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  useEffect(() => {
    axiosSecure.get(`/SingleFood/${id}`).then((data) => setFoodItem(data.data));
  }, [id, axiosSecure]);

  const {
    _id,
    name,
    origin,
    category,
    quantity,
    description,
    price,
    ingredients,
    img,
  } = foodItem;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name?.value;
    const description = form.description?.value;
    const quantity = parseInt(form.quantity?.value);
    const madeBy = form.madeBy?.value;
    const price = parseInt(form.price?.value);
    const img = form.img?.value;
    const ingredients = form.ingredients?.value;
    const origin = form.origin?.value;
    const category = form.category?.value;
    const email = user?.email;
    const count = 0;
    const newFood = {
      name,
      origin,
      count,
      category,
      quantity,
      description,
      price,
      ingredients,
      img,
      madeBy,
      email,
    };

    if (
      !name ||
      !price ||
      !quantity ||
      !description ||
      !img ||
      !origin ||
      !category
    ) {
      toast.error("Please fill in all required fields", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    axiosSecure
      .patch(`/updateFood/${_id}`, { newFood })
      .then((response) => {
        if (response.data.modifiedCount) {
          toast.success("Updated Successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error("An error occurred while adding the food item", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  return (
    <div className="w-11/12 mx-auto mb-20">
      <Helmet>
        <title>Update Item</title>
      </Helmet>
      <h1 className="mt-10 text-2xl font-bold text-center mb-8">
        Update Food Item
      </h1>
      <form onSubmit={handleUpdate} className="bg-gray-300 p-4 rounded-md">
        <div className="flex flex-col lg:flex-row items-center justify-around mt-2">
          <div className="form-control w-full max-w-sm">
            <label className="label">
              <span className="label-text font-medium">Food Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              defaultValue={name}
              className="input input-bordered w-full max-w-sm"
            />
          </div>
          <div className="form-control w-full max-w-sm">
            <label className="label">
              <span className="label-text font-medium">Food Price</span>
            </label>
            <input
              type="text"
              name="price"
              placeholder="Price"
              defaultValue={price}
              className="input input-bordered w-full max-w-sm"
            />
          </div>
        </div>{" "}
        <div className="flex flex-col lg:flex-row items-center justify-around">
          <div className="form-control w-full max-w-sm">
            <label className="label">
              <span className="label-text font-medium">Product Category</span>
            </label>
            <input
              type="text"
              name="category"
              placeholder="category"
              defaultValue={category}
              className="input input-bordered w-full max-w-sm"
            />
          </div>
          <div className="form-control w-full max-w-sm">
            <label className="label">
              <span className="label-text font-medium">Food Origin</span>
            </label>
            <input
              type="text"
              name="origin"
              placeholder="Food origin"
              defaultValue={origin}
              className="input input-bordered w-full max-w-sm"
            />
          </div>
        </div>{" "}
        <div className="flex flex-col lg:flex-row items-center justify-around">
          <div className="form-control w-full max-w-sm">
            <label className="label">
              <span className="label-text font-medium">Food Quantity</span>
            </label>
            <input
              type="text"
              name="quantity"
              placeholder="quantity"
              defaultValue={quantity}
              className="input input-bordered w-full max-w-sm"
            />
          </div>
          <div className="form-control w-full max-w-sm">
            <label className="label">
              <span className="label-text font-medium">Photo url</span>
            </label>
            <input
              type="text"
              name="img"
              placeholder="photo url"
              defaultValue={img}
              className="input input-bordered w-full max-w-sm"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-around">
          <div className="form-control w-full max-w-sm">
            <label className="label">
              <span className="label-text font-medium">Made By</span>
            </label>
            <input
              type="text"
              name="madeBy"
              placeholder="Made By"
              value={user?.displayName}
              readOnly
              className="input input-bordered w-full max-w-sm"
            />
          </div>
          <div className="form-control w-full max-w-sm">
            <label className="label">
              <span className="label-text font-medium">Food ingredients</span>
            </label>
            <input
              type="text"
              name="ingredients"
              placeholder="ingredients"
              defaultValue={ingredients}
              className="input input-bordered w-full max-w-sm"
            />
          </div>
        </div>
        <div className="form-control w-full max-w-5xl mx-auto">
          <label className="label">
            <span className="label-text font-medium">Food Description</span>
          </label>
          <textarea
            name="description"
            placeholder="description"
            defaultValue={description}
            className="textarea textarea-bordered w-full max-w-5xl h-32"
          ></textarea>
        </div>
        <div className="form-control w-full max-w-5xl mx-auto mt-6 mb-6">
          <button className="btn bg-red-500 text-white hover:text-black">
            Update
          </button>
        </div>
      </form>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default UpdateFood;
