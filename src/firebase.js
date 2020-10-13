import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCzV6GBkXoVkt-O3qY5lVzywh65mbg6xYs",
  authDomain: "discord-clone-jalish.firebaseapp.com",
  databaseURL: "https://discord-clone-jalish.firebaseio.com",
  projectId: "discord-clone-jalish",
  storageBucket: "discord-clone-jalish.appspot.com",
  messagingSenderId: "114502432669",
  appId: "1:114502432669:web:6198a1ee94eb616f436174",
  measurementId: "G-0V78WVTY3S",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
