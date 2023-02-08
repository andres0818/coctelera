import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyACwlFir-C4ABALbhTqxd0rlbbIGRGMjx4",
    authDomain: "crud-ecomerce.firebaseapp.com",
    projectId: "crud-ecomerce",
    storageBucket: "crud-ecomerce.appspot.com",
    messagingSenderId: "198036361545",
    appId: "1:198036361545:web:92ed453a44f761a498ca98"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();


export { app, auth, db };
