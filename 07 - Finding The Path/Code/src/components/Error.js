import { Link, useReactRouter, useRouteError } from "react-router-dom";
import Logo from "./Logo";

const Error = () => {
  const objError = useRouteError();
  console.log(objError);
  return (
    <>
      <div className="header pb-3">
        <Logo />
      </div>
      <div className="error-wrapper-background">
        <div className="error-wrapper-layer">
          <h1 style={{ color: "red" }}>{objError.status}</h1>
          <h3 className="mt-4">Oops! {objError.statusText}!</h3>
          <h4 className="mt-5"> Something went wrong here... </h4>
          <h5 className="mt-3">We can't find the page you are looking for.</h5>
          <Link
            to={"/"}
            className="btn btn-success mt-5"
            style={{
              fontWeight: "500",
              boxShadow: "burlywood 1px 2px 2px 2px",
              backgroundColor: "#5420a1",
            }}
          >
            Go Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default Error;
