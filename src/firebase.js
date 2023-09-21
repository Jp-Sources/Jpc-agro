// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCV3UvHb7OwIc_QNJbgYtzBut9QVFEdS5o",
  authDomain: "auth-e3a2e.firebaseapp.com",
  projectId: "auth-e3a2e",
  storageBucket: "auth-e3a2e.appspot.com",
  messagingSenderId: "167903543372",
  appId: "1:167903543372:web:b2737ea9dbd5eb185534e9",
  measurementId: "G-LE431K7G6C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;