import { NavLink, Outlet } from "react-router-dom"

export const Product = () => {
  return (
    <>
      <div>
        <NavLink to="featured">Featured</NavLink>
        <NavLink to="new">New</NavLink>
      </div>
      <Outlet/>
    </>
  )
}