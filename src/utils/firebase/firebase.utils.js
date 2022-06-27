import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBWvrvRMfNv-tSSW75BW7YYBXhtzbHfgGs',
  authDomain: 'shop-vntg-db.firebaseapp.com',
  projectId: 'shop-vntg-db',
  storageBucket: 'shop-vntg-db.appspot.com',
  messagingSenderId: '696808131452',
  appId: '1:696808131452:web:df33a0e5507847377932f9',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
