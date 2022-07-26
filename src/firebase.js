import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {getFirestore} from "firebase/firestore";

import {getStorage} from "firebase/storage" ;
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBEB75UFSI_AGZHtHxKZRrKO4lyoca-3c",
  authDomain: "shopaholic-7be4c.firebaseapp.com",
  projectId: "shopaholic-7be4c",
  storageBucket: "shopaholic-7be4c.appspot.com",
  messagingSenderId: "100356967688",
  appId: "1:100356967688:web:3ccd40f6febe4c86c830bd",
  measurementId: "G-30XEYMCLKB"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);


const db = getFirestore(firebaseApp);
const auth = firebase.auth();

const storage = getStorage(firebaseApp) ;

export {auth, db, storage} ;