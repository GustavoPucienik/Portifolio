// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwEmqTLNoSM_sf1BJ4Y96HLAF1IHraoew",
  authDomain: "portifoliogus.firebaseapp.com",
  projectId: "portifoliogus",
  storageBucket: "portifoliogus.appspot.com",
  messagingSenderId: "608080646602",
  appId: "1:608080646602:web:47f4fd9911fac16938bf33",
  measurementId: "G-WV3G0B6KFF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);