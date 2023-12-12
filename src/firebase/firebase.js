// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoPK7cBbLO43l7B2m5Fc6lwrb3-wBh2V0",
  authDomain: "social-syf.firebaseapp.com",
  projectId: "social-syf",
  storageBucket: "social-syf.appspot.com",
  messagingSenderId: "906852216482",
  appId: "1:906852216482:web:3c549cfa8fef35ff9771fb",
};

// Initialize Firebase

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
