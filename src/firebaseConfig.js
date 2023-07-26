import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAtK-WU6IqCzClIqxQ_5aiflVBE1Qqw9Fc",
    authDomain: "ecommerce3d-react.firebaseapp.com",
    projectId: "ecommerce3d-react",
    storageBucket: "ecommerce3d-react.appspot.com",
    messagingSenderId: "681300493436",
    appId: "1:681300493436:web:303dee2699c1ac365235f9"
};

const app = initializeApp(firebaseConfig);

export const dataBase = getFirestore(app);