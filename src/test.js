import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

// 1st way to fetch data from firebase database
firestore.collection('users').doc('U3gOjQovc8Dl842QnJaI').collection('cartItem').doc('7RG5p3jfwhAIG4pizORr')
// 2st way to fetch data from firebase database
firestore.doc('/users/U3gOjQovc8Dl842QnJaI/cartItem/7RG5p3jfwhAIG4pizORr')
// 3st way to fetch data from firebase database
firebase.collection('/users/U3gOjQovc8Dl842QnJaI/cartItem')