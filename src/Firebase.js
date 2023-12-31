import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDR8ZgWXPrPBVPdgbe--B4qEsukgLET4KQ",
  authDomain: "sonify-93026.firebaseapp.com",
  projectId: "sonify-93026",
  storageBucket: "sonify-93026.appspot.com",
  messagingSenderId: "749694719165",
  appId: "1:749694719165:web:178328015debd0a05953d4",
  measurementId: "G-8FCZTY6ZXQ"
};

const app = initializeApp(firebaseConfig)
export const database = getAuth(app)

