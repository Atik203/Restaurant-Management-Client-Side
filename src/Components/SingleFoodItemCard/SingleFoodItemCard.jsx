const SingleFoodItemCard = ({ foodItem }) => {
  const { _id, name, img, quantity, category, price } = foodItem;

  return (
    <div className="card bg-base-100 h-[600px] shadow-xl">
      <figure>
        <img src={img} alt="food" className="h-[320px] w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-red-500">Food Name: {name}</h2>
        <h1 className="text-lg font-medium">Food category: {category}</h1>
        <p className="text-base font-medium">Quantity: {quantity}</p>
        <p className="text-base font-medium">
          Price:{" "}
          <span className="text-lg font-bold text-red-500">{price}$</span>
        </p>
        <div className="card-actions">
          <button className="btn text-white border-none bg-red-500 hover:text-black hover:bg-gray-300">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleFoodItemCard;
