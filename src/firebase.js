import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const {
  REACT_APP_FIREBASE_APIKEY: apiKey,
  REACT_APP_FIREBASE_AUTH_DOMAIN: authDomain,
  REACT_APP_FIREBASE_PROJECT_ID: projectId,
  REACT_APP_FIREBASE_STORAGE_BUCKET: storageBucket,
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID: messagingSenderId,
  REACT_APP_FIREBASE_APP_ID: appId
} = process.env;

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}
