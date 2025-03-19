import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAzr2wUVx2zpj44MPd9GHCRpmw7C_okcgM",
    authDomain: "test-database-26bd6.firebaseapp.com",
    projectId: "test-database-26bd6",
    storageBucket: "test-database-26bd6.firebasestorage.app",
    messagingSenderId: "883574736644",
    appId: "1:883574736644:web:5da779b83efdf0b46d3251",
    measurementId: "G-HLDH73Z9MC"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();