import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyASrkaqqZLlEEWGifBmuoHOE2vXfCmH6qU",//process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "fb-cliente01.firebaseapp.com",//process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: "cliente01",//process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: "fb-cliente01.firebasestorage.app",//process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: "902935178491",//process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: "1:902935178491:web:55896f13cf8b496a75945e",//process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: "G-SFF2W6YB1X"//REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);


export { auth, db };