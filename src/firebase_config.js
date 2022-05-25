import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLoPN60T64H1JetIvPjpO65KybE5BFb9s",
  authDomain: "todoapp-9002d.firebaseapp.com",
  projectId: "todoapp-9002d",
  storageBucket: "todoapp-9002d.appspot.com",
  messagingSenderId: "496576388111",
  appId: "1:496576388111:web:365682df4d8dfe4314d77a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export {db};

