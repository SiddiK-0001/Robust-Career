// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQ9D_iUfmHAdDvaDx_Ffrr2R_JbfBQxIk",
  authDomain: "assignment-09-f7d10.firebaseapp.com",
  projectId: "assignment-09-f7d10",
  storageBucket: "assignment-09-f7d10.firebasestorage.app",
  messagingSenderId: "1002419073334",
  appId: "1:1002419073334:web:ac8268883f5ba8f821c397"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);