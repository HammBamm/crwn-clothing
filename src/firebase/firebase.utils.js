import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

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

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
