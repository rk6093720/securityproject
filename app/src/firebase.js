import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAjvzackRBh6i-cVbErk0hCy-ZN0iXyopI",
  authDomain: "jslindia-5903a.firebaseapp.com",
  projectId: "jslindia-5903a",
  storageBucket: "jslindia-5903a.appspot.com",
  messagingSenderId: "929244308459",
  appId: "1:929244308459:web:7b15e12b5cb7c0453fafae",
};
console.log(firebaseConfig);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
