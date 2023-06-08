import { Link } from "react-router-dom";
import logoImage from "../../public/logo-eatout.png";

export default Logo = function () {
  return (
    <Link to="/">
      <img
        src={logoImage}
        alt="logo"
        height={65}
        width={145}
        data-testid="logo"
      />
    </Link>
  );
};
