import { initializeApp } from 'firebase/app';
import { firestore } from 'firebase/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const config = {
    apiKey: "AIzaSyC961UaSw6gfQboGjcpTfgYgM1cO7X8OWc",
    authDomain: "crwn-db-39133.firebaseapp.com",
    projectId: "crwn-db-39133",
    storageBucket: "crwn-db-39133.appspot.com",
    messagingSenderId: "266075153159",
    appId: "1:266075153159:web:728bd5c9ab212db2021ba2"
};

const app = initializeApp(config);
const auth = getAuth();
const provider = new GoogleAuthProvider();

const signInWithGoogle = () => signInWithPopup(auth, provider).catch((error) => {
    console.log(error);
});

export default signInWithGoogle;