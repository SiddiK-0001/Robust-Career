import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase';

export const Authcontext = createContext(null);

const Authprovider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading,setLoading]=useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser =()=>{
        setLoading(true)
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                
                setUser(currentUser)
                setLoading(false)
            }
            else {
               
                setUser(null)
            }
        })

        return ()=>{
            unsubscribe();
        }
    }, [])



    const info = {
        
        user,
        loading,
        createUser,
        loginUser,
        signOutUser
    }

    return (
        <Authcontext.Provider value={info}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;