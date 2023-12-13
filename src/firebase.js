// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVr2upjKek-dnITSg_WkOvHEyPw9_NEbg",
  authDomain: "react-clone-fb01c.firebaseapp.com",
  projectId: "react-clone-fb01c",
  storageBucket: "react-clone-fb01c.appspot.com",
  messagingSenderId: "603138987529",
  appId: "1:603138987529:web:b188e919fe3f9173250ad8",
  measurementId: "G-79FDS0WD4M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);