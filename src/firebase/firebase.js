import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"
import { GoogleAuthProvider, TwitterAuthProvider } from 'firebase/auth'


const firebaseConfig = initializeApp({
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  databaseURL: process.env.REACT_APP_databaseURL,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId,
});

const db = getDatabase(firebaseConfig);

const provider = new GoogleAuthProvider()
const twitterProvider = new TwitterAuthProvider

export { provider, twitterProvider, db as default }