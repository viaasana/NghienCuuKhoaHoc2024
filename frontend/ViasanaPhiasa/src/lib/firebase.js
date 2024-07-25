
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/Firestore";
import { getStorage } from "firebase/Storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "fir-54f60.firebaseapp.com",
  databaseURL: "https://fir-54f60-default-rtdb.firebaseio.com",
  projectId: "fir-54f60",
  storageBucket: "fir-54f60.appspot.com",
  messagingSenderId: "691370661172",
  appId: "1:691370661172:web:2c6ed82ee73e3c85078161",
  measurementId: "G-KSSB6B7S4Q"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()