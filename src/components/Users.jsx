import useUsersHook from "../hooks/useUsersHook"
import User from "./User"

const Users = () => {
    const {users} = useUsersHook();
  return (
    <div className="p-3">
      {users.map((user) => <User key={user.id} user={user} /> )}
    </div>
  )
}

export default Users
