// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIyjkzU_U0nPS4NgoRvSHqYz5XnOr7HYg",
  authDomain: "to-do-site-e5197.firebaseapp.com",
  projectId: "to-do-site-e5197",
  storageBucket: "to-do-site-e5197.appspot.com",
  messagingSenderId: "187142945397",
  appId: "1:187142945397:web:808e60c681229b30b7563c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth