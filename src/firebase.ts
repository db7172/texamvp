import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAaZz6MwX24qtm1xliNOZnVDEj1kyOVWlU",
  authDomain: "texatrove-feaf2.firebaseapp.com",
  projectId: "texatrove-feaf2",
  storageBucket: "texatrove-feaf2.appspot.com",
  messagingSenderId: "938327353012",
  appId: "1:938327353012:web:fe37f53d4734baad1fd9e1",
  measurementId: "G-JG3TN45WJR",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();
firebase.analytics();
firebase.auth();

export default firebase;
