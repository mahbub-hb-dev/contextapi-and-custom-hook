import { useContext } from "react";
import { UsersContext } from "../UserContext/UsersContext";

const useUsersHook = () => {
  return useContext(UsersContext);
}

export default useUsersHook
