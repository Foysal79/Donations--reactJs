import { createBrowserRouter } from "react-router-dom";

import MainLayOuts from "../LayOuts/MainLayOuts";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";



const CreateMyRoutes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOuts></MainLayOuts>,
      children: [ 
        {
            path : "/",
            element: <Home></Home>,
            loader: () => fetch('data.json'),
        },
        {
            path: "/donation",
            element: <Donation></Donation>
        },
        {
            path: "/statistics",
            element: <Statistics></Statistics>
        }
      ]
    },
  ]);

export default CreateMyRoutes;