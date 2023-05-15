import React, { lazy, Suspense, useEffect } from "react";
import ReactDOM from "react-dom/client";
// import "bootstrap/dist/css/bootstrap.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Help from "./components/Help";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
// import Offer from "./components/OfferClass";

const Offer = lazy(() => import("./components/OfferClass"));

const AppLayout = () => {
  // let pathname = window.location.pathname;
  // console.log("render : " + pathname);
  // useEffect(() => {
  //   pathname = window.location.pathname;
  //   console.log(pathname);
  // }, [window.location.pathname]);

  return (
    <>
      {/* <Header pathname={pathname} /> */}
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
        element: (
          <Suspense fallback={<Shimmer />}>
            <Offer />
          </Suspense>
        ),
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
