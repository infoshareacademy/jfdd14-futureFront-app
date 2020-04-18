import firebase from "firebase";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyDf7A1aQgcKDMbwKmYIh7RHjwtOfKcsJUI",
  authDomain: "jfdd14-futurefrontapp.firebaseapp.com",
  databaseURL: "https://jfdd14-futurefrontapp.firebaseio.com",
  projectId: "jfdd14-futurefrontapp",
  storageBucket: "jfdd14-futurefrontapp.appspot.com",
  messagingSenderId: "340723353084",
  appId: "1:340723353084:web:88f7e70cc654de1f9a9e79",
  measurementId: "G-53DMQT5FW6",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const storage = firebase.storage();

const auth2 = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { storage, database, auth2, googleProvider, firebase as default };
