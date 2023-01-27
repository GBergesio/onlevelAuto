// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDblMAas4SGKuGKqId4cwoiZpJEs0vQ3Po",
  authDomain: "laptoparticles-8fa2d.firebaseapp.com",
  projectId: "laptoparticles-8fa2d",
  storageBucket: "laptoparticles-8fa2d.appspot.com",
  messagingSenderId: "639476642846",
  appId: "1:639476642846:web:87101c99e0b8fb40ed6a0f",
  measurementId: "G-3P0ZGVNLPC"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


export default firebaseApp

