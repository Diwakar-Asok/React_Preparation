import { Outlet } from "react-router-dom"

export const User = () => {
  return (
    <>
     <h3>User 1</h3>
     <h3>User 2</h3>
     <h3>User 3</h3>
     <Outlet/>
    </>
  )
}