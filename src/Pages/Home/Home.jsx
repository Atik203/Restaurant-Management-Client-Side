import { Helmet } from "react-helmet";
import Banner from "../../Components/Banner/Banner";
import BestSellingFoods from "../../Components/BestSellingFoods/BestSellingFoods";

const Home = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner></Banner>
      <h1 className="text-3xl font-bold text-center mt-28 md:mt-20">
        Discover Our Best-Selling Dishes
      </h1>
      <p className="text-center text-base p-4 md:text-xl text-gray-600 mt-4">
        Explore our mouthwatering selection of dishes that will elevate your
        dining experience.
      </p>
      <div className="my-10 w-11/12 mx-auto">
        <BestSellingFoods></BestSellingFoods>
      </div>
    </div>
  );
};

export default Home;
