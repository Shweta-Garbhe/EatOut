import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Header from "./components/Header";
import GreetUser from "./components/GreetUser";
import Gallery from "./components/Gallery";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Help from "./components/Help";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";
// import Offer from "./components/OfferClass";

const Offer = lazy(() => import("./components/OfferClass"));

const AppLayout = () => {
  // let pathname = window.location.pathname;
  // console.log("render : " + pathname);
  // useEffect(() => {
  //   pathname = window.location.pathname;
  //   console.log(pathname);
  // }, [window.location.pathname]);

  const [userInfo, setUserInfo] = useState({
    name: "Shweta Garbhe",
    skill: "React.js",
    role: " Full stack developer",
  });

  return (
    <>
      {/* <Header pathname={pathname} /> */}
      <Provider store={store}>
        <Header />
        <UserContext.Provider value={{ userInfo: userInfo }}>
          <Outlet />
        </UserContext.Provider>
        <Footer />
      </Provider>
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
        path: "/", //replacing {outlet} with greetUser, gallery and body component here.
        element: (
          <>
            <GreetUser />
            <Gallery />
            <Body />
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
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));

reactRoot.render(<RouterProvider router={appRouter} />);
