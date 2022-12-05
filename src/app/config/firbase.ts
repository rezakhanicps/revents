import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyBOlVirAf_bFvQE61XttauK9jBOHxqH2hU',
    authDomain: 'revents-4d0b6.firebaseapp.com',
    projectId: 'revents-4d0b6',
    storageBucket: 'revents-4d0b6.appspot.com',
    messagingSenderId: '704660015496',
    appId: '1:704660015496:web:f8523ba03ee967557f923d',
    measurementId: 'G-VHX8FY19PL',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
