// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
import { getStorage } from 'firebase/storage'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAf-LjUY4TbzByiuJQ6b08DsrSATQwRCc0",
  authDomain: "cookbook-me.firebaseapp.com",
  projectId: "cookbook-me",
  storageBucket: "cookbook-me.appspot.com",
  messagingSenderId: "537562609929",
  appId: "1:537562609929:web:6a92aee269386e0bfefbd8",
  measurementId: "G-5GN02X9082",
  databaseURL: "https://cookbook-me-default-rtdb.firebaseio.com/",
  storageBucket: "gs://cookbook-me.appspot.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const database = getDatabase(app)
export const storage = getStorage(app)
