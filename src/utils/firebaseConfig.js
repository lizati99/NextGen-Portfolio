// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// إعدادات Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCYKUgij9QByJduhrGhkmwQIkFfGqTUGes",
  authDomain: "mohammed-lizati---portfolio.firebaseapp.com",
  projectId: "mohammed-lizati---portfolio",
  storageBucket: "mohammed-lizati---portfolio.appspot.com", 
  messagingSenderId: "1066006358299",
  appId: "1:1066006358299:web:a21bcc1fec91d9b9c64bbe",
  measurementId: "G-B7GKQ1L3Y1"
};

// تهيئة Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); 
// const analytics = getAnalytics(app);
const storage = getStorage(app);
export { db, storage };

