import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTags,
  faCircleQuestion,
  faUser,
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "./Logo";

export default Header = () => {
  return (
    <div className="header">
      <Logo />
      <div className="nav-items">
        <ul className="nav-ul">
          <li>
            <span>
              <FontAwesomeIcon icon={faTags} size="xs" />
              &nbsp;&nbsp;Offer
            </span>
          </li>
          <li>
            <span>
              <FontAwesomeIcon icon={faCircleQuestion} size="xs" />
              &nbsp;&nbsp;Help
            </span>
          </li>
          <li>
            <span>
              <FontAwesomeIcon icon={faUser} size="xs" />
              &nbsp;&nbsp;Login
            </span>
          </li>
          <li>
            <span>
              <FontAwesomeIcon icon={faCartShopping} size="xs" />
              &nbsp;&nbsp;Cart
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};
