import { auth } from './firebase'
import { signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from 'firebase/auth'

export const login = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
};

export const logout = async () => {
    return await signOut(auth);
};

export const createUser = async (auth, email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
};
