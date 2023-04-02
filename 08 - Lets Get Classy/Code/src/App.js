import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Help from "./components/Help";
import RestaurantMenu from "./components/RestaurantMenu";
import Offer from "./components/OfferClass";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/", //replacing {outlet} with gallery and body component here.
        element: (
          <>
            <Gallery /> <Body />
          </>
        ),
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/offer",
        element: <Offer />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));

reactRoot.render(<RouterProvider router={appRouter} />);
