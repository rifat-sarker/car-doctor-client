import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"; 

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [users, setUsers] = useState(null);
    const [loading, setloading] = useState(true);

    const createUser =(email, password)=> {
        return createUserWithEmailAndPassword(auth,email,password)
        setloading(true)
    }
    const signIn = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
        setloading(true)
    }

    const logOut = ()=> {
        setloading(true)
        return signOut(auth)
    }

    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, currentUser=> {
            setUsers(currentUser)
            setloading(false)
        })
        return ()=> {
            return unsubscribe();
        }
    }, [])
    const authInfo = {
        users,
        loading,
        createUser,
        signIn,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;