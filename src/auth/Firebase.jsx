import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";

// Firebase configuration details
const firebaseConfig = {
  apiKey: "AIzaSyCf8MRHqLui8odhOuFCqtZQxM_SjrjIU-c",
  authDomain: "upliance-a2095.firebaseapp.com",
  projectId: "upliance-a2095",
  storageBucket: "upliance-a2095.firebasestorage.app",
  messagingSenderId: "17003670497",
  appId: "1:17003670497:web:5a965923a73d6dfa4f80a0",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export {
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
};
