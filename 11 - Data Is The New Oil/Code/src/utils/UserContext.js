import { createContext } from "react";

const UserContext = createContext({
  userInfo: {
    name: "Shweta",
    skill: "React.js",
    role: " Full stack developer",
  },
});

export default UserContext;
