import React, { useState } from "react";

import LoginForm from "../LoginForm/LoginForm";

const Auth = (props) => {
  const [isLoggedIn, setLoggedIn] = useState(true);

  return !isLoggedIn ? <LoginForm setLoggedIn={setLoggedIn} /> : props.children;
};

export default Auth;
