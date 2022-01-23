import firebase from "firebase/app";
import "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAFuBn3ysW87XzTsPoR4T7Dy_PLYMFKvbg",
    authDomain: "react-firebase-projects-9724f.firebaseapp.com",
    projectId: "react-firebase-projects-9724f",
    storageBucket: "react-firebase-projects-9724f.appspot.com",
    messagingSenderId: "366063374837",
    appId: "1:366063374837:web:227d3fa603976294bd50bc"
  };

  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account",
  });

  function login() {
      return auth.signInWithPopup(provider);
  }

  function logout() {
      return auth.signOut();
  }

  export { auth, login, logout };