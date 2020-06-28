import * as firebase from 'firebase';

let config = {
    apiKey: "AIzaSyBsiLVnxA6ScDfx54BIqAfCJNFsgzAvAuI",
    authDomain: "reacthooks-todoapp.firebaseapp.com",
    databaseURL: "https://reacthooks-todoapp.firebaseio.com",
    projectId: "reacthooks-todoapp",
    storageBucket: "reacthooks-todoapp.appspot.com",
    messagingSenderId: "116704529811",
    appId: "1:116704529811:web:dc72bc9a7a3a6e9622ec66",
    measurementId: "G-QHEN4LEE36"
};
firebase.initializeApp(config);

export default firebase;