import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC9LkDBUCDbN8R5a10lvL990KGj2F3tC5g",
  authDomain: "maltimart-317d9.firebaseapp.com",
  projectId: "maltimart-317d9",
  storageBucket: "maltimart-317d9.appspot.com",
  messagingSenderId: "654191498593",
  appId: "1:654191498593:web:f6382890ddbbc8baf1e120",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
