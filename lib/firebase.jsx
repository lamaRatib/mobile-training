import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAMH7XRICk66ufhmHUwQ0mHSYiM_KAPPwQ",
  authDomain: "testapp-361ed.firebaseapp.com",
  projectId: "testapp-361ed",
  storageBucket: "testapp-361ed.firebasestorage.app",
  messagingSenderId: "819443043520",
  appId: "1:819443043520:web:bf6bacc25c201855777125",
  measurementId: "G-C95KQT2KZY"
};

export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
})
export const db = getFirestore(app); 