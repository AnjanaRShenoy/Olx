import firebase from "firebase";
import "firebase/auth"
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDABar7hflS89yWhTALk9ST3_vF2SCnqv8",
    authDomain: "olx-bf5d9.firebaseapp.com",
    projectId: "olx-bf5d9",
    storageBucket: "olx-bf5d9.appspot.com",
    messagingSenderId: "1059258811346",
    appId: "1:1059258811346:web:4093e152a3908cb977fe0b",
    measurementId: "G-WH5R6NFSV8"
  };

export default firebase.initializeApp(firebaseConfig)