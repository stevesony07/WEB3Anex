import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyC-HuV79oAn9QU9SSwJXY77OwTTzT4UFvU",
  authDomain: "agentic-nex.firebaseapp.com",
  projectId: "agentic-nex",
  storageBucket: "agentic-nex.firebasestorage.app",
  messagingSenderId: "964717999257",
  appId: "1:964717999257:web:388dd0b754e071f55f7408",
  measurementId: "G-MYGVXQ75NN"
};

// Initialize Firebase only if no apps exist
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { app, auth, analytics }; 