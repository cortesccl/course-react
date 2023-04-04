// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaCvwx2jZrT1Y9hLruFbK_mHXb_Qp9Ni4",
  authDomain: "react-scc-journal.firebaseapp.com",
  projectId: "react-scc-journal",
  storageBucket: "react-scc-journal.appspot.com",
  messagingSenderId: "992410918917",
  appId: "1:992410918917:web:4bc4f43ff3083108ae3c6c"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth (FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)