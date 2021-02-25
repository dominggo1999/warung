import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCi9HL9i-84KjPlXWJKkbOgE5YpdSTTmP4',
  authDomain: 'warung-db-ce589.firebaseapp.com',
  projectId: 'warung-db-ce589',
  storageBucket: 'warung-db-ce589.appspot.com',
  messagingSenderId: '622480180464',
  appId: '1:622480180464:web:142ea6a2c5f4bebc07ae35',
  measurementId: 'G-XH43J66R8K',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const signInWithGoogle = () => firebase.auth().signInWithPopup(provider);

export default firebase;
