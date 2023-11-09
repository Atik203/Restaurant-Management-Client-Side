import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Review = () => {
  const axiosSecure = useAxiosSecure();

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axiosSecure
      .get("/review")
      .then((res) => setReviews(res.data))
      .catch();
  }, [axiosSecure]);

  return (
    <div className="py-16 bg-gray-100">
      <Marquee gradient={true} pauseOnHover={true}>
        {reviews.map((review) => (
          <div
            key={review._id}
            className="w-64 mx-4 h-80 bg-white rounded-lg p-4 shadow-md"
          >
            <div className="flex items-center mb-4">
              <img
                src={review.imageUrl}
                alt={`${review.name}'s profile`}
                className="w-12 h-12 bg-gray-300 rounded-full mr-4"
              />
              <div>
                <p className="text-lg font-semibold">{review.name}</p>
                <p className="text-gray-500">Customer</p>
              </div>
            </div>
            <div className="prose text-justify">
              <p>{review.review}</p>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Review;
