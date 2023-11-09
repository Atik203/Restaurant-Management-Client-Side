import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { AuthContext } from "../../Provider/AuthProvider";
import OrderItem from "../../Components/OrderItem/OrderItem";
import Swal from "sweetalert2";

const MyOrderedItems = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axiosSecure
      .get(`/orders?email=${user?.email}`)
      .then((res) => {
        setOrders(res?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [axiosSecure, user?.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/orders/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");

            const remaining = orders.filter((order) => order._id !== id);
            setOrders(remaining);
          }
        });
      }
    });
  };

  return (
    <div className="w-11/12 mx-auto my-20">
      <Helmet>My Ordered Items</Helmet>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Food Name</th>
              <th>Customer Details</th>
              <th>Pricer</th>
              <th>Order Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {orders?.map((order) => (
              <OrderItem
                order={order}
                key={order._id}
                handleDelete={handleDelete}
              ></OrderItem>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrderedItems;
