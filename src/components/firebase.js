import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
// https://firebase.google.com/docs/web/setup#available-libraries
const apiKey = 'AIzaSyCp_Jy1DNAJudUXH1f1zCh7qvCAjzHhjm8'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: apiKey,
    authDomain: 'portfolio-b55d2.firebaseapp.com',
    projectId: 'portfolio-b55d2',
    storageBucket: 'portfolio-b55d2.appspot.com',
    messagingSenderId: '482886921633',
    appId: '1:482886921633:web:5ed458d6fdfb55d1f4afe0',
    measurementId: 'G-ZDB1YTZ5BR',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
