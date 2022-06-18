import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
  apiKey: "AIzaSyCK9VUoJiRc3guQh2706z93TzFrlSTwrHg",
  authDomain: "master-project-b461e.firebaseapp.com",
  projectId: "master-project-b461e",
  storageBucket: "master-project-b461e.appspot.com",
  messagingSenderId: "257035152868",
  appId: "1:257035152868:web:b803718f9a114d1db6ebf1",
  measurementId: "G-ETHTL830KL"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
