import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";
import "firebase/storage";

const FirebaseConfig = {
  apiKey: "AIzaSyAwCBflZbXeRfoVa-a8r2pXP4eHQkaMCLQ",
  authDomain: "texatrove-user.firebaseapp.com",
  projectId: "texatrove-user",
  storageBucket: "texatrove-user.appspot.com",
  messagingSenderId: "31578782252",
  appId: "1:31578782252:web:2c29ad0e57bad5a82f6f89",
  measurementId: "G-9DSZBL621F",
};

firebase.initializeApp(FirebaseConfig);
firebase.firestore();
firebase.storage();
firebase.analytics();
firebase.auth();

export default firebase;
