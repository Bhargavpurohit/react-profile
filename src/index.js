import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import App from "./App";
const firebaseConfig = {
  apiKey: "AIzaSyCYr2Lv4OMqlWH2D5ca4UgSFHbrzzwsNaA",
  authDomain: "bhargavpurohit-9ecdb.firebaseapp.com",
  projectId: "bhargavpurohit-9ecdb",
  storageBucket: "bhargavpurohit-9ecdb.appspot.com",
  messagingSenderId: "553113080957",
  appId: "1:553113080957:web:7ef37d3ba10afc301c4d14",
  measurementId: "G-PE9LNZ9M2B",
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
