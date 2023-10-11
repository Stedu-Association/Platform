import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "stedu-association.firebaseapp.com",
  projectId: "stedu-association",
  storageBucket: "stedu-association.appspot.com",
  messagingSenderId: "891985687804",
  appId: "1:891985687804:web:90402da4681fe14dbf1379",
  measurementId: "G-701MW3FT6N"
};

const app = initializeApp(firebaseConfig);

export default app;