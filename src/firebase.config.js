// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJLJc40FEGY--_jLJBZyDlE8vQFiLHejg",
  authDomain: "online-job-portal-3f407.firebaseapp.com",
  projectId: "online-job-portal-3f407",
  storageBucket: "online-job-portal-3f407.appspot.com",
  messagingSenderId: "986829231795",
  appId: "1:986829231795:web:27cb9f8efd99085ba182c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};