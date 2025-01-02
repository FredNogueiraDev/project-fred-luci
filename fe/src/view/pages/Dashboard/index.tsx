import { logout } from "../../../Services/auth";


export function Dashboard() {
  return (
    <>
      <h1>Dashboard Page</h1>
      <button onClick={logout}>LOGOUT</button>
    </>
  )
}
