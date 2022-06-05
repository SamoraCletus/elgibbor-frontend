// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIir5zBkhhVTEjXsVBubAFJr4zPNSAfg4",
  authDomain: "el-gibbor-client.firebaseapp.com",
  projectId: "el-gibbor-client",
  storageBucket: "el-gibbor-client.appspot.com",
  messagingSenderId: "544279987448",
  appId: "1:544279987448:web:70ae6699ea53d19d9e270d",
  measurementId: "G-Z8V31VH68X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
