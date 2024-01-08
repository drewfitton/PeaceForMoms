// Import the functions you need from the SDKs you need
import firebase from "firebase/compat";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhAFimjLlCrtgHXRWPCJJYqt-odprAeJY",
  authDomain: "peace-for-moms.firebaseapp.com",
  projectId: "peace-for-moms",
  storageBucket: "peace-for-moms.appspot.com",
  messagingSenderId: "785782458449",
  appId: "1:785782458449:web:4f34cfb30d621d33195070",
  measurementId: "G-RB6VWY3KZ6",
  databaseURL: "https://peace-for-moms-default-rtdb.firebaseio.com/",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
