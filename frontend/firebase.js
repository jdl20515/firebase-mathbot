// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeBJOIRYDn1UecNRvNLC2imu9FGWwz_oo",
  authDomain: "mathbot-5c9ee.firebaseapp.com",
  projectId: "mathbot-5c9ee",
  storageBucket: "mathbot-5c9ee.appspot.com",
  messagingSenderId: "49014668425",
  appId: "1:49014668425:web:6cfcba5a01d310fe29da58",
  measurementId: "G-BGFYSMGY33"
  
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)
//   firebase_app.name && typeof window !== 'undefined' ? getAnalytics(firebase_app) : null;
// Initialize Firebase


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;