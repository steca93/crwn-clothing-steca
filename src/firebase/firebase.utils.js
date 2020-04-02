import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA3NrsmEuQuguq0NQUxgKE0_KXgX11VsVI",
    authDomain: "crwn-db-4112c.firebaseapp.com",
    databaseURL: "https://crwn-db-4112c.firebaseio.com",
    projectId: "crwn-db-4112c",
    storageBucket: "crwn-db-4112c.appspot.com",
    messagingSenderId: "827126682770",
    appId: "1:827126682770:web:59513c5c092858bc83424b",
    measurementId: "G-S8Y098RSKR"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;