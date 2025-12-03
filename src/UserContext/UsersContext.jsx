import { createContext, useState } from "react";

export const UsersContext = createContext();

const UsersProvider = ({children}) =>{
      const [users, setUsers] = useState([
        {id : 101, username : "Mahbub Hasan"},
        {id : 102, username : "Belal Hosen"},
      ])

    return <UsersContext.Provider value={{users, setUsers}}>
        {children}
    </UsersContext.Provider>
}
export default UsersProvider;