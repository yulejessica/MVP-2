import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth,GoogleAuthProvider  } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0P3cEqPR4GNULZzLH9dSydolU3Kl49NU",
  authDomain: "hr-mvp-1b7f5.firebaseapp.com",
  projectId: "hr-mvp-1b7f5",
  storageBucket: "hr-mvp-1b7f5.appspot.com",
  messagingSenderId: "352459148466",
  appId: "1:352459148466:web:33fc78b5d9fd85489a0dab",
  measurementId: "G-RG9HMNS0HR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

