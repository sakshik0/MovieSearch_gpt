// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGRWo5WNYcI0v0Rd92Ef-tuKBWJq2dHLk",
  authDomain: "netflix-gpt-a21d1.firebaseapp.com",
  projectId: "netflix-gpt-a21d1",
  storageBucket: "netflix-gpt-a21d1.appspot.com",
  messagingSenderId: "1073263383249",
  appId: "1:1073263383249:web:81be24bd6a159ca38e2bf0",
  measurementId: "G-6VSN2RQ79B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);