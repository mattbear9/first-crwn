import firebase from 'firebase/app';

import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('aUNJAJyOyuZPCKkMHjvr').collection('cartItems').doc('aMX07RrpGlTThT3enM87');
firestore.doc('/users/aUNJAJyOyuZPCKkMHjvr/cartItems/aMX07RrpGlTThT3enM87');
firestore.collection('/users/aUNJAJyOyuZPCKkMHjvr/cartItems')