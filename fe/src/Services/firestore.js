import { db } from './firebase'
import { collection, getDocs, addDoc } from 'firebase/firestore'

export const getDocuments = async (collectionName) => {
    const querySnapshot = await getDocs(collection(db, collectionName));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const addDocument = async (collectionName, data) => {
    return await addDoc(collection(db, collectionName), data);
};