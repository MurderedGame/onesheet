import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsE0KNFADbhCXM9fwUArNMmlObU34nk4g",
  authDomain: "onesheetnew.firebaseapp.com",
  projectId: "onesheetnew",
  storageBucket: "onesheetnew.appspot.com",
  messagingSenderId: "577480533188",
  appId: "1:577480533188:web:408bc9ebe71a04b0279591",
  measurementId: "G-4CHY05SVZ9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);