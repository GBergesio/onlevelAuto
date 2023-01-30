// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLTQqXDpXwoHIPIj00sqU0HZKtf-FcAaA",
  authDomain: "onlevelcars.firebaseapp.com",
  projectId: "onlevelcars",
  storageBucket: "onlevelcars.appspot.com",
  messagingSenderId: "753746285281",
  appId: "1:753746285281:web:6e2e9abc3d85d908dc9da0"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


export default firebaseApp

