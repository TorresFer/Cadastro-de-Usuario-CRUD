import 'firebase/firestore';
import 'firebase/auth';
import firebase from 'firebase/app';

if(!firebase.apps.length) {
    firebase.initializeApp({
        // apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        // projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        // authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        apiKey: "AIzaSyCnfKlGUjlKlOQAh1BomdvYMTHa6LnwBxo",
        projectId: "next-crud-c61eb", 
        authDomain: "next-crud-c61eb.firebaseapp.com",
    })
}

export default firebase;