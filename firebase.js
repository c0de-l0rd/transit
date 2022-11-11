// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7ZqH3DaS2IzxJRvevt76nwVBaI4bxDOY",
  authDomain: "transit-site.firebaseapp.com",
  projectId: "transit-site",
  storageBucket: "transit-site.appspot.com",
  messagingSenderId: "951689544913",
  appId: "1:951689544913:web:fbb612b3bbc2e9c00e31f0",
  measurementId: "G-F00NM96QF6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);