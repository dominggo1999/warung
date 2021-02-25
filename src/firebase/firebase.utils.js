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

// Kalau user sign in pakai google atau sign up pakai email
// Check apakah akunnya sudah terdaftar atau tidak
// Kalau belum buat akunnya di firestore

export const createUserProfileDocument = async (userAuth, additionalData, createNew = false) => {
  // Hanya akses firestore kalau ada user yang sign in
  if(!userAuth) return;

  // Cek document yang
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  // Ambil informasi document
  const snapshot = await userRef.get();

  // Buat akun kalau belum ada
  if(!snapshot.exists) {
    const { email } = userAuth;
    // Set display name when sign in/up using google
    const createDisplayNameFromEmail = (email) => {
      return email.split('@')[0];
    };
    const createdAt = new Date();

    const displayName = createNew ? additionalData.displayName : createDisplayNameFromEmail(email);

    try {
      userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('Error message :', error);
    }
  }

  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const signInWithGoogle = () => firebase.auth().signInWithPopup(provider);

export default firebase;
