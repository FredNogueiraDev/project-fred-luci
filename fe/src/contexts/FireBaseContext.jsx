import React, { createContext, useContext } from 'react';
import { auth, db } from '../Services/firebase';

const FireBaseContext = createContext();

export const FirebaseProvider = ({children}) => {
    return (
        <FireBaseContext.Provider value={{ auth, db }}>
            {children}
        </FireBaseContext.Provider>
    );
};

export const useFirebase = () => useContext(FireBaseContext);