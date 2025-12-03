import { createContext, useState } from "react";

export const UsersContext = createContext();

const UsersProvider = ({children}) =>{
      const [users, setUsers] = useState([
        {id : 101, username : "Kazi Nazrul Islam"},
        {id : 102, username : "Ravindranath Tagore"},
      ])

    return <UsersContext.Provider value={{users, setUsers}}>
        {children}
    </UsersContext.Provider>
}
export default UsersProvider;