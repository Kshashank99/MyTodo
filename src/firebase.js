import firebase from "firebase";
  
  const firebaseApp = firebase.initializeApp({
      // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyB8e6xgxYB0dbzdJkfvCRRvRbx4fGfDKQo",
    authDomain: "todo-app-cp-6537f.firebaseapp.com",
    projectId: "todo-app-cp-6537f",
    storageBucket: "todo-app-cp-6537f.appspot.com",
    messagingSenderId: "56179243235",
    appId: "1:56179243235:web:bb6e8cf19ed17a54826dd6",
    measurementId: "G-WYCHKBHGDX"
    
})
const db = firebaseApp.firestore();
export {db};
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyB8e6xgxYB0dbzdJkfvCRRvRbx4fGfDKQo",
//     authDomain: "todo-app-cp-6537f.firebaseapp.com",
//     projectId: "todo-app-cp-6537f",
//     storageBucket: "todo-app-cp-6537f.appspot.com",
//     messagingSenderId: "56179243235",
//     appId: "1:56179243235:web:bb6e8cf19ed17a54826dd6",
//     measurementId: "G-WYCHKBHGDX"
//   };