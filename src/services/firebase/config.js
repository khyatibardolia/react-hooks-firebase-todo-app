import * as firebase from 'firebase';

let config = {
  apiKey: "AIzaSyBhChoba0eTUZZpScCct_9lLSh6TQnbzoE",
  authDomain: "react-todo-app-4a094.firebaseapp.com",
  databaseURL: "https://react-todo-app-4a094-default-rtdb.firebaseio.com",
  projectId: "react-todo-app-4a094",
  storageBucket: "react-todo-app-4a094.appspot.com",
  messagingSenderId: "840279680216",
  appId: "1:840279680216:web:c58cd44b5663ef5dfce3ad",
  measurementId: "G-ZZBLBMJCQP"
};
firebase.initializeApp(config);

export default firebase;
