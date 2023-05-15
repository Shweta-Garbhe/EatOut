import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTags,
  faCircleQuestion,
  faUser,
  faCartShopping,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "./Logo";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default Header = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="flex justify-between py-2 px-12 shadow-sm">
      <Logo />
      <div className="nav-items">
        <ul className="flex m-4">
          <li className="text-xl inline-block align-middle">
            <span>
              <Link
                to="/offer"
                className="text-slate-600 border-none bg-none text-lg px-6 no-underline hover:text-orange-500"
              >
                <FontAwesomeIcon icon={faTags} size="xs" />
                &nbsp;&nbsp;Offer
              </Link>
            </span>
          </li>
          <li className="text-xl inline-block align-middle">
            <span>
              <Link
                to="/help"
                className="text-slate-600 border-none bg-none text-lg px-6 no-underline hover:text-orange-500"
              >
                <FontAwesomeIcon icon={faCircleQuestion} size="xs" />
                &nbsp;&nbsp;Help
              </Link>
            </span>
          </li>
          <li className="text-xl inline-block align-middle">
            <span>
              {isLoggedIn ? (
                <button
                  className="text-slate-600 border-none bg-none text-lg px-6 no-underline hover:text-orange-500"
                  onClick={() => {
                    setIsLoggedIn(false);
                  }}
                >
                  <FontAwesomeIcon icon={faSignOut} size="xs" />
                  &nbsp;&nbsp; Logout
                </button>
              ) : (
                <button
                  className="text-slate-600 border-none bg-none text-lg px-6 no-underline hover:text-orange-500"
                  onClick={() => {
                    setIsLoggedIn(true);
                  }}
                >
                  <FontAwesomeIcon icon={faUser} size="xs" />
                  &nbsp;&nbsp; Login
                </button>
              )}
            </span>
          </li>
          <li className="text-xl inline-block align-middle">
            <span>
              <Link
                to="/cart"
                className="text-slate-600 border-none bg-none text-lg pl-6 no-underline hover:text-orange-500"
              >
                <FontAwesomeIcon icon={faCartShopping} size="xs" />
                &nbsp;&nbsp;Cart
              </Link>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};
