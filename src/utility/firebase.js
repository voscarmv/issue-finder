/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDs-rxvOLmskYhudQWPOxl-whELlKKUYhs',
  authDomain: 'issue-finder.firebaseapp.com',
  projectId: 'issue-finder',
  storageBucket: 'issue-finder.appspot.com',
  messagingSenderId: '918268898722',
  appId: '1:918268898722:web:653b04454a9eee41d896fb',
  measurementId: 'G-C28740E7D5'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
