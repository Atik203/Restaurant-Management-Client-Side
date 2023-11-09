import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Root from "../Pages/Root/Root";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import AllFoodItems from "../Pages/AllFoodItems/AllFoodItems";
import Blog from "../Pages/Blog/Blog";
import AddedFoodItems from "../Pages/AddedFoodItems/AddedFoodItems";
import PrivateRoute from "./../PrivateRoute/PrivateRoute";
import NewAddFoodItem from "../Pages/NewAddFoodItem/NewAddFoodItem";
import MyOrderedItems from "../Pages/MyOrderedItems/MyOrderedItems";
import SingleFoodDetails from "../Pages/SingleFoodDetails/SingleFoodDetails";
import FoodBuyingPage from "../Pages/FoodBuyingPage/FoodBuyingPage";
import UpdateFood from "../Pages/UpdateFood/UpdateFood";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/all-food-items",
        element: <AllFoodItems></AllFoodItems>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/added-food-items",
        element: (
          <PrivateRoute>
            <AddedFoodItems></AddedFoodItems>
          </PrivateRoute>
        ),
      },
      {
        path: "/add-food-items",
        element: (
          <PrivateRoute>
            <NewAddFoodItem></NewAddFoodItem>
          </PrivateRoute>
        ),
      },
      {
        path: "/ordered-food-items",
        element: (
          <PrivateRoute>
            <MyOrderedItems></MyOrderedItems>
          </PrivateRoute>
        ),
      },
      {
        path: "/SingleFood/:id",
        element: (
          <PrivateRoute>
            <SingleFoodDetails></SingleFoodDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/BuyFood/:id",
        element: (
          <PrivateRoute>
            <FoodBuyingPage></FoodBuyingPage>
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateFood></UpdateFood>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
