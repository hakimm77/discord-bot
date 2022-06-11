const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyChS3fTUNnxhmLnBUo3k9__jz-9l-tXi9E",
  authDomain: "metamask-connection.firebaseapp.com",
  projectId: "metamask-connection",
  storageBucket: "metamask-connection.appspot.com",
  messagingSenderId: "305528047307",
  appId: "1:305528047307:web:8b24cfc0645457d6927d4e",
  measurementId: "G-2YC47XCBSQ",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

module.exports = { firebaseConfig, db };
