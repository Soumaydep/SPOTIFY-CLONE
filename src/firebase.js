// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import firebase from "firebase/compat/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA4h8LEE7gD36SOPGnNyiZjLnxeUk_jBwc",
  authDomain: "spotify-clone-adak.firebaseapp.com",
  projectId: "spotify-clone-adak",
  storageBucket: "spotify-clone-adak.appspot.com",
  messagingSenderId: "1046438969748",
  appId: "1:1046438969748:web:5945344bb9eaea94ad8f81",
  measurementId: "G-2Z85YCE7JN"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// export { auth };

const app = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
