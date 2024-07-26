
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "friebase/firestore"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "fir-54f60.firebaseapp.com",
  databaseURL: "https://fir-54f60-default-rtdb.firebaseio.com",
  projectId: "fir-54f60",
  storageBucket: "fir-54f60.appspot.com",
  messagingSenderId: "691370661172",
  appId: "1:691370661172:web:091271a091ba8ddb078161",
  measurementId: "G-2JM1ZYS60T"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const analytics = getFirestore(app)