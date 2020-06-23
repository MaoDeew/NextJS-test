import firebase from "firebase/app";
import "firebase/storage"

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAKOvDACg5ROdDKxTHQ54AzzioARbENNlU",
    authDomain: "pruebasreactclase.firebaseapp.com",
    databaseURL: "https://pruebasreactclase.firebaseio.com",
    projectId: "pruebasreactclase",
    storageBucket: "pruebasreactclase.appspot.com",
    messagingSenderId: "643911326090",
    appId: "1:643911326090:web:773199624e4d8584c01073",
    measurementId: "G-WY6S230HDV"
  };

  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

  
export default firebase;