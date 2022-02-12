import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"
import { GoogleAuthProvider, TwitterAuthProvider } from 'firebase/auth'


const firebaseConfig = initializeApp ({
  apiKey: "AIzaSyCweSc_RIQt-HkvD_xPA4QAkNR3VLKywwg",
  authDomain: "blog-68b22.firebaseapp.com",
  projectId: "blog-68b22",
  storageBucket: "blog-68b22.appspot.com",
  messagingSenderId: "710921736181",
  appId: "1:710921736181:web:9414af1aa6e86dc1c21abc",
  measurementId: "G-EJG8V9JNS6"
});

const db = getDatabase(firebaseConfig);

const provider = new GoogleAuthProvider()
const twitterProvider = new TwitterAuthProvider

export{provider, twitterProvider, db as default}