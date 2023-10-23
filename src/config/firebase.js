
import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDh5sF3aZjTQx3VqYXN1BESBUFmqIDH3T0",
  authDomain: "mariabiancajeicianeifal513.firebaseapp.com",
  projectId: "mariabiancajeicianeifal513",
  storageBucket: "mariabiancajeicianeifal513.appspot.com",
  messagingSenderId: "811240611222",
  appId: "1:811240611222:web:7aac4ec3afa046b63911b7",
  measurementId: "G-7XY2FPY4JJ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = initializeAuth(app)

export { app, db, auth }