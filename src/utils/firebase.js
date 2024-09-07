// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDP-2a2vfMO_Yf9N5BIrSC7CDxKWcI1nug",
  authDomain: "netflixgpt-9a806.firebaseapp.com",
  projectId: "netflixgpt-9a806",
  storageBucket: "netflixgpt-9a806.appspot.com",
  messagingSenderId: "600017854490",
  appId: "1:600017854490:web:fb15d07ffd5e99bfa6f1a3",
  measurementId: "G-E2T4BGFEDN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
