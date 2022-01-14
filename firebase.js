import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/functions";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByFzMv7kALlwgTvRLnVnRtfPUSKGT5DyU",
  authDomain: "smartation-80066.firebaseapp.com",
  projectId: "smartation-80066",
  storageBucket: "smartation-80066.appspot.com",
  messagingSenderId: "817132133095",
  appId: "1:817132133095:web:86178d6f09158769752042",
  measurementId: "G-JCZ8ZH04V1",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;
