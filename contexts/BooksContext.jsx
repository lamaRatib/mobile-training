import { createContext, useEffect, useState } from "react"
import { collection, addDoc, getDocs, query, where, doc, getDoc, deleteDoc, onSnapshot } from "firebase/firestore"
import { db } from "../lib/firebase"
import { useUser } from "../hooks/useUser"

export const BooksContext = createContext()

export function BooksProvider({ children }) {
    const [books, setBooks] = useState([])
    const { user } = useUser()

    async function fetchBooks() {
        try {
            const q = query(collection(db, "books"), where("userId", "==", user.uid))
            const snapshot = await getDocs(q)
            const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
            setBooks(list)
        } catch (error) {
            console.log(error.message)
        }
    }

    async function fetchBookById(id) {
        try {
            const docRef = doc(db, "books", id)
            const docSnap = await getDoc(docRef)

            if (docSnap.exists()) {
                return { id: docSnap.id, ...docSnap.data() }
            } else {
                return null
            }
        } catch (error) {
            console.log(error.message)
            return null
        }
    }

    async function createBook(data) {
        try {
            const docRef = await addDoc(collection(db, "books"), { ...data, userId: user.uid })
        } catch (error) {
            console.log(error.message)
        }
    }

    async function deleteBook(id) {
        try {
            await deleteDoc(doc(db, "books", id))
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        let unsubscribe
        if (user) {
            const q = query(collection(db, "books"), where("userId", "==", user.uid))
            unsubscribe = onSnapshot(q, (snapshot) => {
                const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                setBooks(list)
            })
        } else {
            setBooks([])
        }
        return () => unsubscribe && unsubscribe()
    }, [user])


    return (
        <BooksContext.Provider value={{ books, fetchBooks, fetchBookById, createBook, deleteBook }}>
            {children}
        </BooksContext.Provider>
    )
}