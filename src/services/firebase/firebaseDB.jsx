// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDtXOvG9tmXRYjDD7O3EYjzz2syivlbTAA",
    authDomain: "horno-panadero.firebaseapp.com",
    databaseURL: "https://horno-panadero-default-rtdb.firebaseio.com",
    projectId: "horno-panadero",
    storageBucket: "horno-panadero.appspot.com",
    messagingSenderId: "310370306205",
    appId: "1:310370306205:web:64ff344cc779b97dffac74"
  };

// Initialize Firebase
const appFire = initializeApp(firebaseConfig)

export default appFire