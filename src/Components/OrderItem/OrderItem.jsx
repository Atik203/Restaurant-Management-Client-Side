import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const OrderItem = ({ order, handleDelete }) => {
  const { user } = useContext(AuthContext);

  const { name, _id, date, email, price, img, category } = order;

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
        <span className="badge badge-ghost badge-sm">{email}</span>
      </td>
      <td>{price}$</td>
      <td>{date}</td>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-ghost bg-red-500 text-white btn-xs"
        >
          Delete
        </button>
      </th>
    </tr>
  );
};

export default OrderItem;
