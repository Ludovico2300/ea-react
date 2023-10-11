// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGtpfeqnn82saa7M9Y4pynJ8r5QYXYeeQ",
  authDomain: "ea-react-cec85.firebaseapp.com",
  projectId: "ea-react-cec85",
  storageBucket: "ea-react-cec85.appspot.com",
  messagingSenderId: "538422863777",
  appId: "1:538422863777:web:908508e2a0283c7fb1cde0",
  measurementId: "G-WN0S4GBSZW",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
  // Initialize Firebase
}

const app = initializeApp(firebaseConfig);
const databaseUser = getAuth(app);
const databaseData = getDatabase();

export { databaseUser, databaseData };
