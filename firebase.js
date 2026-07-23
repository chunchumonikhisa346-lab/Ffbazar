// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

// Register
window.register = function(email,password){
  createUserWithEmailAndPassword(auth,email,password)
  .then(()=>{
    alert("Registration Successful");
    location.href="login.html";
  })
  .catch(e=>alert(e.message));
}

// Login
window.login = function(email,password){
  signInWithEmailAndPassword(auth,email,password)
  .then(()=>{
    location.href="index.html";
  })
  .catch(e=>alert(e.message));
}

// Logout
window.logout = function(){
  signOut(auth).then(()=>{
    location.href="login.html";
  });
    }
