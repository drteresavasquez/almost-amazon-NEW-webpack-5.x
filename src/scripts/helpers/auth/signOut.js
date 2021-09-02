import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const signOut = () => {
  firebase.auth().signOut();
};

export default signOut;
