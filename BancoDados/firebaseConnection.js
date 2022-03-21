import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyCqvOqAdYZ3EGLpkVbSamm4zV7DDA9xyvE",
    authDomain: "curso-97b67.firebaseapp.com",
    projectId: "curso-97b67",
    storageBucket: "curso-97b67.appspot.com",
    messagingSenderId: "907717409629",
    appId: "1:907717409629:web:e7506fb44ab403d03a06b4",
    measurementId: "G-JVB0QQ78M0"
};
  
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}
export default firebase;
