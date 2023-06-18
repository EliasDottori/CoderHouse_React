// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6fjek8EDCr7dVtWqDsOfMVKiGVv-C4og",
  authDomain: "bodegon-online-b7f46.firebaseapp.com",
  projectId: "bodegon-online-b7f46",
  storageBucket: "bodegon-online-b7f46.appspot.com",
  messagingSenderId: "112973542799",
  appId: "1:112973542799:web:9191dbd8ed847cba6907fa",
  measurementId: "G-W1T2NKHV88",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
