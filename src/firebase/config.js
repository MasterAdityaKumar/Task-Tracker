import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCdGtYykNNBezTXCrjnT5XibE9tqSzxu_4",
  authDomain: "tasktracker-3bb91.firebaseapp.com",
  projectId: "tasktracker-3bb91",
  storageBucket: "tasktracker-3bb91.appspot.com",
  messagingSenderId: "933420466856",
  appId: "1:933420466856:web:d86e81c7964afe0305389d"
};

  firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();

const projectAuth = firebase.auth();

const projectStorage = firebase.storage();

const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };

// user collection
// - any authenticated user can read and create
// - only user who "own/created" a document can update it (user id match)

// projects collection
// - any authenticated user can read, create and update a document
// - only users who "own/created" a document can delete it