import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD-nGDi8fCVtLFWq4JQYfHhc3dqTBnyAe0",
    authDomain: "crwn-db-1adc2.firebaseapp.com",
    databaseURL: "https://crwn-db-1adc2.firebaseio.com",
    projectId: "crwn-db-1adc2",
    storageBucket: "crwn-db-1adc2.appspot.com",
    messagingSenderId: "957659282935",
    appId: "1:957659282935:web:f21f3331261db221fe42f2",
    measurementId: "G-SWKK4B521S"
  };
 
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' })

  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase;