// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATCUjWe1bbp2yOiZwOzBATrHfU2CE7rPY",
  authDomain: "shushant-3b425.firebaseapp.com",
  projectId: "shushant-3b425",
  storageBucket: "shushant-3b425.firebasestorage.app",
  messagingSenderId: "770199015415",
  appId: "1:770199015415:web:bef917e226d613a469e8f2",
  measurementId: "G-C989SR0F8V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);