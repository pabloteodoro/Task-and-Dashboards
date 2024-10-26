
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQ5oSI6hI9g1Cesx8IglMyg5QVKpiwnyg",
  authDomain: "tarefas-c1e79.firebaseapp.com",
  databaseURL: "https://tarefas-c1e79-default-rtdb.firebaseio.com",
  projectId: "tarefas-c1e79",
  storageBucket: "tarefas-c1e79.appspot.com",
  messagingSenderId: "739779985459",
  appId: "1:739779985459:web:96037c0b5d1572cb12e346"
};


const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp)

export { db };