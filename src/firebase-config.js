import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAMf7-tx3RjHg4m-nOASKucse0W7Ba0-ak",
    authDomain: "cruc-react.firebaseapp.com",
    projectId: "cruc-react",
    storageBucket: "cruc-react.appspot.com",
    messagingSenderId: "510747972946",
    appId: "1:510747972946:web:2c0680397929486eb4968b"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);