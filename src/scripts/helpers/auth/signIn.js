import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const signIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

export default signIn;
