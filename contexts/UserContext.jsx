import { createContext, useState, useEffect } from "react"
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth"
import { auth } from "../lib/firebase"
import { onAuthStateChanged } from "firebase/auth"


// the box
export const UserContext = createContext()


// the one who fills the box(provider)
export function UserProvider({ children }) {
    const [user, setUser] = useState(null)
    const [authChecked, setAuthChecked] = useState(false)



    async function login(email, password) {
        try {
            const res = await signInWithEmailAndPassword(auth, email, password)
            setUser(res.user)
        } catch (error) {
            throw Error(error.message)   // was: console.log(...)
        }
    }



    async function register(email, password) {
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password)
            setUser(res.user)   // Firebase signs in automatically
        } catch (error) {
            throw Error(error.message)
        }
    }

    async function logout() {
        await signOut(auth)
        setUser(null)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)          // a user object, or null
            setAuthChecked(true)   // we’ve now checked
        })
        return unsubscribe          // stop listening when unmounted
    }, [])


    return (
        <UserContext.Provider value={{ user, login, register, logout, authChecked }}>
            {children}
        </UserContext.Provider>
    )
}