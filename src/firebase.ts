// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbeM4NAyKX_a_PJmdIaCDUUL8e71LIbq4",
  authDomain: "contacts-3024d.firebaseapp.com",
  projectId: "contacts-3024d",
  storageBucket: "contacts-3024d.appspot.com",
  messagingSenderId: "133953147476",
  appId: "1:133953147476:web:469269857f77a77f3c53c1",
  measurementId: "G-X85MMKPB0J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

export const db = getFirestore(app);