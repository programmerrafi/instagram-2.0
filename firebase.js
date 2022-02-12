// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVD3vNNkB0F2YIu_XOtL202XUSzcuVd_c",
  authDomain: "insta-2-y.firebaseapp.com",
  projectId: "insta-2-y",
  storageBucket: "insta-2-y.appspot.com",
  messagingSenderId: "904225888987",
  appId: "1:904225888987:web:c205ce9984b0e62c8f0afe",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
