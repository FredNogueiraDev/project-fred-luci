import { useState, useEffect } from "react";
import { auth } from "../Services/firebase";
import { onAuthStateChanged } from "firebase/auth";

export const useAuth = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    },[]);

    return user;
}