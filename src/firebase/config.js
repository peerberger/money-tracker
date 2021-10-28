import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBrY6E2OUo-x50neIISKfftitlJEZXoHAM",
  authDomain: "itaymoneytracker.firebaseapp.com",
  projectId: "itaymoneytracker",
  storageBucket: "itaymoneytracker.appspot.com",
  messagingSenderId: "942209605095",
  appId: "1:942209605095:web:c76ba353a2365b5d84b142"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }