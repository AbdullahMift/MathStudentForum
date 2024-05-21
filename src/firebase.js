// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDRXMYmSqDVU-WcORtLeO2orVYhY1YlPeE",
  authDomain: "mathstudentforum.firebaseapp.com",
  databaseURL: "https://mathstudentforum-default-rtdb.firebaseio.com",
  projectId: "mathstudentforum",
  storageBucket: "mathstudentforum.appspot.com",
  messagingSenderId: "30391566735",
  appId: "1:30391566735:web:c85552025e11d0ec774bfa",
  measurementId: "G-0X3BHG6RE2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
