import { Helmet } from "react-helmet";
import Banner from "../../Components/Banner/Banner";

const Home = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner></Banner>
    </div>
  );
};

export default Home;
