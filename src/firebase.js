import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAAplupaiGRCaEov2ydEQe4bxr83Ab7DSg",
  authDomain: "slack-clone-cp-56eb9.firebaseapp.com",
  projectId: "slack-clone-cp-56eb9",
  storageBucket: "slack-clone-cp-56eb9.appspot.com",
  messagingSenderId: "551112601361",
  appId: "1:551112601361:web:f310f6a454bb7678b6a6b0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
