// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";

import { getFirestore , 
  collection , 
  getDoc ,
  getDocs , 
  addDoc , 
  doc ,
  deleteDoc ,
  setDoc ,
  updateDoc,
  where ,
  query ,
  } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

import { getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword ,
  signOut } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAkin_Hyrb7rfyssyY1m40LeUJe7Iza20",
  authDomain: "hackathon-1cd21.firebaseapp.com",
  projectId: "hackathon-1cd21",
  storageBucket: "hackathon-1cd21.firebasestorage.app",
  messagingSenderId: "468999764361",
  appId: "1:468999764361:web:0eaba372fe13ea4be48958"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)   // database activated

const auth = getAuth(app)     // auth service activated , reference of Auth service


export {app , db , collection , getDoc , getDocs , addDoc , doc , deleteDoc , updateDoc , setDoc , createUserWithEmailAndPassword , signInWithEmailAndPassword , auth , where , query , signOut};