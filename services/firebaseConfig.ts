import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBEkNKscZKuxxmGPB-cv9fqmLdAu4CY-Yo",
    authDomain: "ankitportfolio-18f5f.firebaseapp.com",
    projectId: "ankitportfolio-18f5f",
    storageBucket: "ankitportfolio-18f5f.firebasestorage.app",
    messagingSenderId: "90594572728",
    appId: "1:90594572728:web:465ace8834bbc4b5d0374d"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
