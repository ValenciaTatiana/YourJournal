// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJlSyg0B0SpRggxuWX-dy5Z4cf6wR33vs",
  authDomain: "yourjournal-f46dd.firebaseapp.com",
  projectId: "yourjournal-f46dd",
  storageBucket: "yourjournal-f46dd.firebasestorage.app",
  messagingSenderId: "201157272967",
  appId: "1:201157272967:web:63d414b0168f4e54651f22"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig); // Inicializa la aplicación de Firebase

export const FirebaseAuth = getAuth(FirebaseApp); // Funcionalidades de autenticación

export const FirebaseDB = getFirestore(FirebaseApp); // Funcionalidades de base de datos Firestore