import firebase from 'firebase/app'
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};

// default init
firebase.initializeApp(firebaseConfig)

// services
const projectFirestore = firebase.firestore()

export { projectFirestore }