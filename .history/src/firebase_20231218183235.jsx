import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCPWZKLZzqTQ9uUUg1b_qWx-ZWVyP-Ec8Q",
  authDomain: "tnchat-1ba34.firebaseapp.com",
  projectId: "tnchat-1ba34",
  storageBucket: "tnchat-1ba34.appspot.com",
  messagingSenderId: "380758170835",
  appId: "1:380758170835:web:abc0d41667d25f9d118826",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
