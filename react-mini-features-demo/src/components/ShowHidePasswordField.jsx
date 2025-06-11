// I maintain two pieces of state: the password value and whether the password is shown. The input field’s type is dynamically set based on the toggle state, and a button lets the user switch between showing and hiding the password.

import React, { useState } from "react";

const ShowHidePasswordField = () => {
  const [password, setPassword] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <button onClick={() => setToggle(!toggle)}>
        {toggle ? "Hide" : "Show"} Password
      </button>
      <input
        type={toggle ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </>
  );
};

export default ShowHidePasswordField;
