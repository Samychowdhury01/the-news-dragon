// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhN53kiIDCoKON_OhRKpDUfUs3scsPtvA",
  authDomain: "the-news-dragon-client-ea137.firebaseapp.com",
  projectId: "the-news-dragon-client-ea137",
  storageBucket: "the-news-dragon-client-ea137.appspot.com",
  messagingSenderId: "1018949291526",
  appId: "1:1018949291526:web:308e4f6f626c3b61ad7d87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app