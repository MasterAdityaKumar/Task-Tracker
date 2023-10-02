import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBsNWPtk1edPO9_RFuhGXqWf_OjMB20gJU",
    authDomain: "task-tracker-5c2d6.firebaseapp.com",
    projectId: "task-tracker-5c2d6",
    storageBucket: "task-tracker-5c2d6.appspot.com",
    messagingSenderId: "581413394654",
    appId: "1:581413394654:web:c31d900d6ec739a33d8a4f"
  };


  //init firebase

  firebase.initializeApp(firebaseConfig)

  //init services

  const projectFirestore = firebase.firestore()

  const projectAuth =firebase.auth()

  const projectStorage =firebase.storage()

  //timestamp
  const timestamp = firebase.firestore.Timestamp

  export { projectFirestore ,projectAuth, projectStorage ,timestamp }