// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5TvuEMLVpCovvXJS68gW8eTCasIxS8Wo",
  authDomain: "almacen-organika.firebaseapp.com",
  projectId: "almacen-organika",
  storageBucket: "almacen-organika.appspot.com",
  messagingSenderId: "777370021265",
  appId: "1:777370021265:web:45a48f99d1e1cdbb4cbe30",
  measurementId: "G-RZ1SHGN57F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app)

export default db