// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCaPiHyn9FSnFhiH0ahY7uX90Ms_qUNMkU",
    authDomain: "technology-cline.firebaseapp.com",
    projectId: "technology-cline",
    storageBucket: "technology-cline.appspot.com",
    messagingSenderId: "146090065057",
    appId: "1:146090065057:web:0722633f2b1cc2cbc084e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth