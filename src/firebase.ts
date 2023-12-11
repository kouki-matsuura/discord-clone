// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOOGFdXpKee9Mm6G5SX4xs0i3ObrYomZo",
  authDomain: "discord-clone-udemy-30f03.firebaseapp.com",
  projectId: "discord-clone-udemy-30f03",
  storageBucket: "discord-clone-udemy-30f03.appspot.com",
  messagingSenderId: "178760404219",
  appId: "1:178760404219:web:badeebe6c0e0e7c538345e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
