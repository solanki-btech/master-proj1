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

export const createUserProfileDocument = async (userAuth, addData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapshot = await userRef.get();

  console.log(snapshot)
  if(!snapshot.exists) {
    const { email, displayName } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...addData 
      })
    } catch (err) {
      console.log("error creating user", err.message)
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
