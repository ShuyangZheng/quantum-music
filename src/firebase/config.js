import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCt3CSzTaziDDg-Ff19HPusyXz9gVnpIqk",
  authDomain: "muso-ninjas-cf138.firebaseapp.com",
  projectId: "muso-ninjas-cf138",
  storageBucket: "muso-ninjas-cf138.appspot.com",
  messagingSenderId: "439882428070",
  appId: "1:439882428070:web:9f7281fa4d5aef1ab18e67"
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };