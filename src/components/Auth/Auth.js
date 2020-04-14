import React, { useState, useEffect } from "react";

import ModalLogin from "../ModalLogin/ModalLogin";

import { logIn, isTokenInStorage } from "../FirebaseAuth/FirebaseAuth";

const REFRESH_INTERVAL = 100;

const Auth = (props) => {
  const [isLoggedIn, setLoggedIn] = useState(isTokenInStorage());
  // @TODO - loading indicator when logging in

  useEffect(() => {
    const id = setInterval(
      () => setLoggedIn(isTokenInStorage()),
      REFRESH_INTERVAL
    );

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
    <ModalLogin onLogInClick={onLogInClick} />
  ) : (
    props.children
  );
};

export default Auth;
