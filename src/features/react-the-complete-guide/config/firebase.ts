import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_COMPLETE_GUIDE_FIREBASE_APIKEY,
  authDomain: import.meta.env.VITE_COMPLETE_GUIDE_FIREBASE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_COMPLETE_GUIDE_FIREBASE_PROJECTID,
  appId: import.meta.env.VITE_COMPLETE_GUIDE_FIREBASE_APPID,
};

const firebase = initializeApp(firebaseConfig);
const fireauth = getAuth(firebase);

export const firebaseApp = {
  fireauth,
};
