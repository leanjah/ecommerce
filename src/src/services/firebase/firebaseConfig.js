import {initializeApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBwi7TSdnx4f6djHLZzuD89DkuynUbaxb4",
    authDomain: "ecommerce-6079e.firebaseapp.com",
    projectId: "ecommerce-6079e",
    storageBucket: "ecommerce-6079e.appspot.com",
    messagingSenderId: "337316716547",
    appId: "1:337316716547:web:71e6baf653b9580bf62e36"
};

const app= initializeApp(firebaseConfig)
export const db = getFirestore(app)
