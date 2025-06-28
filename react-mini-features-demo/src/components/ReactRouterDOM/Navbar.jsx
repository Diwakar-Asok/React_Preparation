import React from "react";
import { Link } from "react-router-dom"; // Link is used to navigate between the component without refreshing the whole page and update the URL
import { NavLink } from "react-router-dom"; // Navlink is by default receives the active class which is linked to current route. So that we can highlight that we are redirecting to this link
import { useAuth } from "./auth";



export const Navbar = () => {

  const auth = useAuth();

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink >
      <NavLink to="/product">Product</NavLink >
      <NavLink to="/Profile">Profile</NavLink >
      {!auth.user && (
        <NavLink to="/login">
          Login
        </NavLink>
      )

      }
    </nav>
  )
}