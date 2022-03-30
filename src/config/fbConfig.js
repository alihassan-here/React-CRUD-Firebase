// import firebase from 'firebase';
// import 'firebase/firestore';
// import 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBmqYLx1RJdni-qiIIpTephZdXIfbdcYYU",
    authDomain: "react-redux-firebase-81d82.firebaseapp.com",
    projectId: "react-redux-firebase-81d82",
    storageBucket: "react-redux-firebase-81d82.appspot.com",
    messagingSenderId: "399787801988",
    appId: "1:399787801988:web:6c289298504a86ad5f71d1"
};

// firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({ timestampsInSnapshots: true });

// export default firebase;

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const colRef = collection(db, 'projects');
getDocs(colRef).then((snapshot) => console.log(snapshot.docs));
export default db;