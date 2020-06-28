import firebase from '../firebase/config';

const FB = firebase;
const Auth = FB.auth();
const storage = firebase.storage();
export default FB;
export {Auth, storage};
