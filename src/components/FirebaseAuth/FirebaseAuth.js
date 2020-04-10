const API_KEY = "AIzaSyDf7A1aQgcKDMbwKmYIh7RHjwtOfKcsJUI";

const SIGN_IN_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;

export const logIn = (email, password) => {
  const credentials = {
    email,
    password,
    returnSecureToken: true,
  };

  return fetch(SIGN_IN_URL, {
    method: "POST",
    body: JSON.stringify(credentials),
  });
};
