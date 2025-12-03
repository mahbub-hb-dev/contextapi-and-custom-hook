import Users from "./components/Users"
import NewUser from "./components/NewUser"
import UsersProvider from "./UserContext/UsersContext"

function App() {

  return (
    <>
      <UsersProvider>
        <NewUser />
        <Users />
      </UsersProvider>
    </>
  )
}

export default App
