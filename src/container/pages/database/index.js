import * as firebase from 'firebase';

// Initialize Firebase login sahaja

const firebaseConfig = {
  apiKey: 'AIzaSyCmByVFCsrS3rQFjttMfSPEm-vd19WMuGY',
  authDomain: 'angular-portfolio-62ee5.firebaseapp.com',
  databaseURL: 'https://angular-portfolio-62ee5.firebaseio.com',
  projectId: 'angular-portfolio-62ee5',
  storageBucket: 'angular-portfolio-62ee5.appspot.com',
  messagingSenderId: '425897881829',
  appId: '1:425897881829:web:28303026f5d33f2e5d240c',
  measurementId: 'G-JJ098FTYFL',
};

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

export default firebase;
