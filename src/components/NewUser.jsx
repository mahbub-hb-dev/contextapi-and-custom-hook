import { useState } from "react";
import useUsersHook from "../hooks/useUsersHook";

const NewUser = () => {
    const [username, setUsername] = useState('');
    const {setUsers} = useUsersHook();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {id:Date.now(), username:username}
        setUsers((prev) => [...prev, newUser])
        setUsername('');
    }

  return (
    <form onSubmit={handleSubmit} className="p-3 bg-amber-200 mx-auto">
        <label htmlFor="username"> User Name : </label>
        <input value={username} onChange={(e)=>setUsername(e.target.value)} type="text" className="border p-1 rounded" />
        <button className="border rounded text-sm ml-2 px-2 py-1 bg-green-600 text-white" type="submit"> Add User </button>
    </form>
  )
}

export default NewUser
