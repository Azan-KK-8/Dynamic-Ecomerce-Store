import { initializeApp } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-ck_CWHbx_NXgijMOfwULM0Be2FSJgj8",
  authDomain: "e-commerce-project-896a9.firebaseapp.com",
  projectId: "e-commerce-project-896a9",
  storageBucket: "e-commerce-project-896a9.firebasestorage.app",
  messagingSenderId: "893005341843",
  appId: "1:893005341843:web:5bb6d056d8a4fc39831966"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
