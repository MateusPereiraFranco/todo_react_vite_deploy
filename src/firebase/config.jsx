import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDAJSNl6Sx6Ysk5Wu-5NW-ei4UwUz-giGw",
  authDomain: "miniblog-21114.firebaseapp.com",
  projectId: "miniblog-21114",
  storageBucket: "miniblog-21114.appspot.com",
  messagingSenderId: "710699028310",
  appId: "1:710699028310:web:f102012d04474f968d90f7"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };