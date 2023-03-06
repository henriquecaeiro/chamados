import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

let firebaseConfig = {
  apiKey: "AIzaSyDTayWDMSeh9lUTQhcgXeH4fdkJ2l-Y5ho",
  authDomain: "chamados-85fea.firebaseapp.com",
  projectId: "chamados-85fea",
  storageBucket: "chamados-85fea.appspot.com",
  messagingSenderId: "83770075599",
  appId: "1:83770075599:web:3ee124df3fd2f373dd0aba",
  measurementId: "G-FV1F15RFJ9"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;