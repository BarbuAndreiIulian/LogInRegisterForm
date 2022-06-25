import { initializeApp } from "firebase/app";
import {getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyD4nMDYi7Bmu5VZQjxWOqtRRrMorvtckxc",
    authDomain: "authentication-tutorial-3db70.firebaseapp.com",
    projectId: "authentication-tutorial-3db70",
    storageBucket: "authentication-tutorial-3db70.appspot.com",
    messagingSenderId: "867919741503",
    appId: "1:867919741503:web:9c7cb33814ebf1f4c96e8a"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app) 