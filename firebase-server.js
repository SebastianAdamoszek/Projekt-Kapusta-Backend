// firebase-server.js

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAfsyHtSagNEVvQgdbPYVfq2TSbXFyOl-A",
  authDomain: "kapusta-backend.firebaseapp.com",
  projectId: "kapusta-backend",
  storageBucket: "kapusta-backend.appspot.com",
  messagingSenderId: "162649070538",
  appId: "1:162649070538:web:e9815246e1f6300f644d33",
  measurementId: "G-520PY75ZLB",
};

const initializeFirebaseApp = () => {
  const app = initializeApp(firebaseConfig);
  return app;
};

export { initializeFirebaseApp };
