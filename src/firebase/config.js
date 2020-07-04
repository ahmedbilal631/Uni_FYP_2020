import firebase from 'firebase/app';
import 'firebase/storage';
import api_key from './api_key';

const firebaseConfig = {
  apiKey:  api_key,
  authDomain: "firsttry-4edb6.firebaseapp.com",
  databaseURL: "https://firsttry-4edb6.firebaseio.com",
  projectId: "firsttry-4edb6",
  storageBucket: "firsttry-4edb6.appspot.com",
  messagingSenderId: "653022125397",
  appId: "1:653022125397:web:aa04639c6ff25119ab23dc"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export {storage, firebase as default};