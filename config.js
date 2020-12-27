import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyDxUwDLXKPIrOw2u03Edsf_-ej4Tm249Is",
  authDomain: "booksanta-18b5b.firebaseapp.com",
  projectId: "booksanta-18b5b",
  storageBucket: "booksanta-18b5b.appspot.com",
  messagingSenderId: "291263266613",
  appId: "1:291263266613:web:91bc3aefce9c6b814b167c"

    /* apiKey: "AIzaSyABlV7U-HuQNo04o_Wx1WTrFnJJXlRWvPs",
    authDomain: "book-santa-2ca2e.firebaseapp.com",
    projectId: "book-santa-2ca2e",
    storageBucket: "book-santa-2ca2e.appspot.com",
    messagingSenderId: "4549153722",
    appId: "1:4549153722:web:f5a144e6d8642ea3eb4383" */
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
