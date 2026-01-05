import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAknAIzNd6WHagCkyB9S49JZa9AyE9yyaI",
  authDomain: "medfinder-532c5.firebaseapp.com",
  projectId: "medfinder-532c5",
  appId: "1:333340883328:web:122e8578583bf9f999e965",
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
