import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyBLTQqXDpXwoHIPIj00sqU0HZKtf-FcAaA",
  authDomain: "onlevelcars.firebaseapp.com",
  // databaseURL: "gs://onlevelcars.appspot.com",
  projectId: "onlevelcars",
  storageBucket: "onlevelcars.appspot.com",
  messagingSenderId: "753746285281",
  appId: "1:753746285281:web:6e2e9abc3d85d908dc9da0"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp


