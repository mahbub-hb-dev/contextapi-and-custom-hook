import useUsersHook from "../hooks/useUsersHook";

const User = ({user}) => {
    const {id, username} = user;
    const {users, setUsers} = useUsersHook();

    const handleDelete = (id) => {
        const filtered = users.filter((user) => user.id !== id)
        setUsers(filtered)
    }

  return ( 
    <div className="bg-[pink] p-2 mb-3 rounded-md">
        <h3 className="font-medium text-sm"> Id : {id} </h3>
        <h2 className="font-bold"> Name : {username} </h2>
        <button 
            onClick={()=>handleDelete(id)} 
            className="border rounded text-sm bg-blue-500 text-white px-2 py-1"> 
            Remove 
        </button>
    </div>
  )
}

export default User
