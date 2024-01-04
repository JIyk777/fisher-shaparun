import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBxN18Qsx_UqgbgnhXasxYytyh6qj31p_Y" ,
  authDomain: "fisher-shaparun.firebaseapp.com",
  projectId: "fisher-shaparun",
  storageBucket: "fisher-shaparun.appspot.com",
  messagingSenderId: "260506676796",
  appId: "1:260506676796:web:104d59992e4d768c201d39",
  measurementId: "G-NE5F356NS8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export default app;