import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD8ahcm9oI9AEjlRDDkzAqPjdZ4PzuUa6o",
    authDomain: "crwn-db-bf0e1.firebaseapp.com",
    projectId: "crwn-db-bf0e1",
    storageBucket: "crwn-db-bf0e1.appspot.com",
    messagingSenderId: "86776934086",
    appId: "1:86776934086:web:7f12d4e0ba948e70e1b1c7",
    measurementId: "G-R8ZZK3J0KZ"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;


    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    if(!snapShot.exists){
        const { displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error){
            console.log('error creating user', error.message);

        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;