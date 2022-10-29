// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1_j-XC487VE1o-smijj3V9IRA5-anmRA",
  authDomain: "portfolio-8c270.firebaseapp.com",
  projectId: "portfolio-8c270",
  storageBucket: "portfolio-8c270.appspot.com",
  messagingSenderId: "298458695213",
  appId: "1:298458695213:web:c5d8cbfda6fc37af401aa4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;