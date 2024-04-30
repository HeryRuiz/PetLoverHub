import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase, ref, child, get } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDaN0rLq4p9BaPDb3NeCVkLleXVcJ-liiU",
  authDomain: "petloverhub-caaeb.firebaseapp.com",
  databaseURL: "https://petloverhub-caaeb-default-rtdb.firebaseio.com",
  projectId: "petloverhub-caaeb",
  storageBucket: "petloverhub-caaeb.appspot.com",
  messagingSenderId: "486558868407",
  appId: "1:486558868407:web:9c6624c436eaa3af407e32",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const database = getDatabase(app);
const storage = getStorage(app);

let activeUser = null;
let username = null;
let purchase = null;
async function getUserByUID(uid) {
  try {
    const snapshot = await get(child(ref(database), `users/${uid}`));
    if (snapshot.exists()) {
      activeUser = snapshot.val();
      username = activeUser.username;
      purchase = activeUser.purchased;
      return activeUser;
    } else {
      activeUser = null;
      username = null;
      return null;
    }
  } catch (error) {
    console.error("Error getting user:", error);
    throw error;
  }
}

export {
  auth,
  firestore,
  database,
  getUserByUID,
  storage,
  activeUser,
  username,
  purchase,
};
export default app;
