import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {

  apiKey: "AIzaSyB8DeQ49qudqcujkY6vDLLYdxkmw7sCLyE",

  authDomain: "crwn-db-3ed2f.firebaseapp.com",

  projectId: "crwn-db-3ed2f",

  storageBucket: "crwn-db-3ed2f.appspot.com",

  messagingSenderId: "780954698050",

  appId: "1:780954698050:web:ea09545fae41d377ea88db",

  measurementId: "G-PSFVD6SCPZ"

};


firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
