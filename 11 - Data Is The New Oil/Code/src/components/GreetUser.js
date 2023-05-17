import { useContext } from "react";
import UserContext from "../utils/UserContext";

const GreetUser = () => {
  const { userInfo } = useContext(UserContext);
  return (
    <div className="mt-3">
      {
        <h5
          className="text-center"
          style={{
            color: "#52239E",
            fontFamily: "ProximaNova, arial, Helvetica Neue, sans-serif",
          }}
        >
          Welcome {userInfo?.name} !
        </h5>
      }
    </div>
  );
};

export default GreetUser;
