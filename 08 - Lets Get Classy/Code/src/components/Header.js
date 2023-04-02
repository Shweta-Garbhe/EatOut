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

export default Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="header">
      <Logo />
      <div className="nav-items">
        <ul className="nav-ul">
          <li>
            <span>
              <Link to="/offer" className="btn btn-menu">
                <FontAwesomeIcon icon={faTags} size="xs" />
                &nbsp;&nbsp;Offer
              </Link>
            </span>
          </li>
          <li>
            <span>
              <Link to="/help" className="btn btn-menu">
                <FontAwesomeIcon icon={faCircleQuestion} size="xs" />
                &nbsp;&nbsp;Help
              </Link>
            </span>
          </li>
          <li>
            <span>
              {isLoggedIn ? (
                <button
                  className="btn btn-menu"
                  onClick={() => {
                    setIsLoggedIn(false);
                  }}
                >
                  <FontAwesomeIcon icon={faSignOut} size="xs" />
                  &nbsp;&nbsp; Logout
                </button>
              ) : (
                <button
                  className="btn btn-menu"
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
          <li>
            <span>
              <Link to="/cart" className="btn btn-menu">
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
