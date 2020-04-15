import React, { useState, useEffect } from "react";

import MenuMaterial from "../Menu/Menu_Material";

import { logIn, isTokenInStorage } from "../FirebaseAuth/FirebaseAuth";

const Auth = (props) => {
  const [isLoggedIn, setLoggedIn] = useState(isTokenInStorage());

  useEffect(() => {
    const id = setInterval(() => setLoggedIn(isTokenInStorage()));

    return () => {
      clearInterval(id);
    };
  }, []);

  const onLogInClick = (email, password) => {
    return logIn(email, password)
      .then(() => {
        setLoggedIn(true);
      })
      .catch((err) => {
        alert("Error logging in!");
        console.log(err);
        setLoggedIn(false);
      });
  };

  return !isLoggedIn ? (
    <MenuMaterial onLogInClick={onLogInClick} />
  ) : (
    props.children
  );
};

export default Auth;
