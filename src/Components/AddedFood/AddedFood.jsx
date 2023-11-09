import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const AddedFood = ({ food }) => {
  const { user } = useContext(AuthContext);

  const { _id, name, img, quantity, category, price } = food;

  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">{category}</div>
          </div>
        </div>
      </td>
      <td>
        {user?.displayName}
        <br />
        <span className="badge badge-ghost badge-sm">{user?.email}</span>
      </td>
      <td>{price}$</td>
      <td>{quantity}</td>
      <th>
        <Link to={`/update/${_id}`}>
          <button className="btn btn-ghost bg-red-500 text-white btn-xs">
            Update
          </button>
        </Link>
      </th>
    </tr>
  );
};

export default AddedFood;
