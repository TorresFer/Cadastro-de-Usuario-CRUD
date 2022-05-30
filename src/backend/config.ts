import firebase from 'firebase'
import 'firebase/firestore'

if(!firebase.apps.length) {
    firebase.initializeApp({
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        projetoId: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    })
}

export default firebase