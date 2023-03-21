import { Link } from "react-router-dom";

export default Logo = function () {
  return (
    <Link to="/">
      <img
        src={require("../../public/logo-eatout.png")}
        alt="logo"
        height={65}
        width={145}
      />
    </Link>
  );
};
