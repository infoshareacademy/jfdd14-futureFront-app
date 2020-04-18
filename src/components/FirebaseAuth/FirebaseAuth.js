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
  })
    .then((response) => {
      if (response.ok) {
        return response;
      }

      return Promise.reject(response);
    })
    .then((response) => response.json())
    .then((data) => {
      const { localId, idToken, email } = data;

      localStorage.setItem("localId", localId);
      localStorage.setItem("idToken", idToken);
      localStorage.setItem("email", email);
      return data;
    });
};

export const fetchWithToken = (url, options) => {
  return fetch(url + "?auth=" + localStorage.getItem("idToken"), options).then(
    (response) => {
      if (response.ok) {
        return response;
      }

      return Promise.reject(response);
    }
  );
};

export const isTokenInStorage = () => {
  const token = localStorage.getItem("idToken");

  return token ? true : false;
};

export const logOut = () => {
  localStorage.removeItem("localId");
  localStorage.removeItem("idToken");
  localStorage.removeItem("email");
};
