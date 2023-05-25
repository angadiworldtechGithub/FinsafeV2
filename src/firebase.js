import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPe-shFLWB6SYRf20Dg7o-rmlZeDhR8RQ",

  authDomain: "finsafesitev2.firebaseapp.com",

  projectId: "finsafesitev2",

  storageBucket: "finsafesitev2.appspot.com",

  messagingSenderId: "336621797304",

  appId: "1:336621797304:web:7334a3c4567ac60e97594d",

  measurementId: "G-05X8CVGR9V",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
