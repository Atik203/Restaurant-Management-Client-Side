import React from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";

const FoodDetails = ({ foodItem }) => {
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
    <div className="w-10/12 mx-auto mt-20 mb-20">
      <Helmet>
        <title>Food Details</title>
      </Helmet>
      <img src={img} className="md:h-[400px] lg:h-[800px] w-full" alt="" />
      <div className="p-4">
        <h1 className="text-red-500 font-bold text-2xl my-3">
          Food Name:{name}
        </h1>
        <h1 className="text-lg font-medium">Category: {category}</h1>
        <h1 className="text-lg font-medium">Origin: {origin}</h1>
        <h1 className="text-lg font-medium">Made By: {madeBy}</h1>
        <p className="text-base text-justify">{description}</p>

        <p className="text-base mt-2 text-justify">
          Price: <span className="text-red-500 font-medium">{price}$</span>
        </p>

        <h1 className="text-left font-bold text-xl my-2 text-red-400">
          Ingredients
        </h1>
        {ingredients &&
          Array.isArray(ingredients) &&
          ingredients.length > 0 && (
            <ul className="text-left font-medium text-base">
              {ingredients?.map((feature, index) => (
                <li key={index}>
                  {index + 1}. {feature}
                </li>
              ))}
            </ul>
          )}
      </div>
      <div className="ml-4">
        <Link to={`/BuyFood/${_id}`}>
          <button className="btn text-white border-none bg-red-500 hover:text-black hover:bg-gray-300">
            Purchase Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FoodDetails;
