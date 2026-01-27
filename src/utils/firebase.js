// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCct4Q3IQsklWxP3wnZugwFCKuhOFkfLuU",
  authDomain: "netflixgpt-1a849.firebaseapp.com",
  projectId: "netflixgpt-1a849",
  storageBucket: "netflixgpt-1a849.firebasestorage.app",
  messagingSenderId: "57864305058",
  appId: "1:57864305058:web:b3ccc1f08628568f731afb",
  measurementId: "G-MBCREKSC25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
