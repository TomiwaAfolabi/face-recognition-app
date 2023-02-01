// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAT0W1NcKqK96GYx-zINDeCB-s3FhgejS4",
  authDomain: "crown-clothing-db-9ac75.firebaseapp.com",
  projectId: "crown-clothing-db-9ac75",
  storageBucket: "crown-clothing-db-9ac75.appspot.com",
  messagingSenderId: "225096594934",
  appId: "1:225096594934:web:01dab2ad9927b3ee2a43d7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const signInwithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore(app);

export const createUserDocument = async (userAuth) => {
  const docRef = doc(db, "users", userAuth.uid);
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      const newDoc = await setDoc(docRef, {
        displayName,
        email,
        createdAt,
      });
    } catch {}
  } else {
    console.log(Error);
  }
};
