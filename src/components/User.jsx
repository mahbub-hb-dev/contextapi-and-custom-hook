import useUsersHook from "../hooks/useUsersHook";

const User = ({user}) => {
    const {id, username} = user;
    const {users, setUsers} = useUsersHook();

    const handleDelete = (id) => {
        const filtered = users.filter((user) => user.id !== id)
        setUsers(filtered)
    }

  return ( 
    <div>
        <h1> {id} </h1>
        <h1> {username} </h1>
        <button onClick={()=>handleDelete(id)} className="border rounded text-sm"> Delete </button>
    </div>
  )
}

export default User
