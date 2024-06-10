// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnMxTINIIc4XNOp5uA4AW88ZMIaOrM3pk",
  authDomain: "silverscreen-7e7fc.firebaseapp.com",
  projectId: "silverscreen-7e7fc",
  storageBucket: "silverscreen-7e7fc.appspot.com",
  messagingSenderId: "178836475732",
  appId: "1:178836475732:web:7f72716de5bb1e15e8c2c1",
  measurementId: "G-KMER79K67Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();