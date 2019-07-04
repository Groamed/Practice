import firebase from "firebase";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyDM-GaD1H16qe-Nsfu4UtR9p94G9alLKfw",
  authDomain: "practice-2b929.firebaseapp.com",
  projectId: "practice-2b929",
  databaseURL: "https://practice-2b929.firebaseio.com",
  storageBucket: "practice-2b929.appspot.com"
});

export const db = firebase.firestore();
export const storage = firebase.storage();
