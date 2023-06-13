
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCnMQX4kEWBJjb7Xli1BxWtG4g_E8xS6SY",
  authDomain: "to-do-list-40cf9.firebaseapp.com",
  projectId: "to-do-list-40cf9",
  storageBucket: "to-do-list-40cf9.appspot.com",
  messagingSenderId: "661468628158",
  appId: "1:661468628158:web:7a05cb762dff93df888aef",
  measurementId: "G-BMWFQR7DWY"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db= getFirestore(app);