import { initializeApp } from "firebase/app";

import { getFirestore } from  "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCaRW7Two4ckPuoEaLHOPLJDVNqNxYiIMQ",
  authDomain: "my-app-react-89194.firebaseapp.com",
  projectId: "my-app-react-89194",
  storageBucket: "my-app-react-89194.appspot.com",
  messagingSenderId: "770430448791",
  appId: "1:770430448791:web:c10fe3b259c2ec0401e5d2",
  measurementId: "G-NN80DQ5YE8"
};


export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
