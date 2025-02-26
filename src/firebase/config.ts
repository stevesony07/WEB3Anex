// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-HuV79oAn9QU9SSwJXY77OwTTzT4UFvU",
  authDomain: "agentic-nex.firebaseapp.com",
  projectId: "agentic-nex",
  storageBucket: "agentic-nex.firebasestorage.app",
  messagingSenderId: "964717999257",
  appId: "1:964717999257:web:388dd0b754e071f55f7408",
  measurementId: "G-MYGVXQ75NN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);

// Enable persistence
auth.setPersistence('local');