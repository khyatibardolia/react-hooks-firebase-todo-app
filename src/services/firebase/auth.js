import {Auth} from '../firebase'
/**
 * Sign in with email and password
 * @param {*} email
 * @param {*} password
 */
export const loginWithPassword = (email, password) => Auth.signInWithEmailAndPassword(email, password);
