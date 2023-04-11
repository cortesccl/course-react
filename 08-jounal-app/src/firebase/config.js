// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
import { getEnvironments } from "../helpers";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// console.log( process.env)
// console.log( import.meta.env)
const {
  VITE_APIKEY,
  VITE_AUTHDOMAIN,
  VITE_PROJECTID,
  VITE_STORAGEBUCKET,
  VITE_MESSAGINGSENDERID,
  VITE_APPID,
} = getEnvironments()
// console.log(env)
// Your web app's Firebase configuration
// Dev/Prod
// const firebaseConfig = {
//   apiKey: "AIzaSyAaCvwx2jZrT1Y9hLruFbK_mHXb_Qp9Ni4",
//   authDomain: "react-scc-journal.firebaseapp.com",
//   projectId: "react-scc-journal",
//   storageBucket: "react-scc-journal.appspot.com",
//   messagingSenderId: "992410918917",
//   appId: "1:992410918917:web:4bc4f43ff3083108ae3c6c"
// };

// Testing
// const firebaseConfig = {
//   apiKey: "AIzaSyD7hDsa-iiOPV_FOzysVw6ths8SkW797ks",
//   authDomain: "fir-testing-6abb0.firebaseapp.com",
//   projectId: "fir-testing-6abb0",
//   storageBucket: "fir-testing-6abb0.appspot.com",
//   messagingSenderId: "45274169576",
//   appId: "1:45274169576:web:72ff3404008492b2f9c95d"
// };

const firebaseConfig = {
  apiKey: VITE_APIKEY,
  authDomain: VITE_AUTHDOMAIN,
  projectId: VITE_PROJECTID,
  storageBucket: VITE_STORAGEBUCKET,
  messagingSenderId: VITE_MESSAGINGSENDERID,
  appId: VITE_APPID,
};

// console.log(firebaseConfig)
// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)