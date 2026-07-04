import { StyleSheet } from "react-native"
import { useLocalSearchParams, useRouter } from "expo-router"
import { useEffect, useState } from "react"
import { useBooks } from "../../../hooks/useBooks"
import { Colors } from "../../../constants/Colors"
import ThemedText from "../../../components/ThemedText"
import ThemedButton from "../../../components/ThemedButton"
import ThemedView from "../../../components/ThemedView"
import Spacer from "../../../components/Spacer"
import ThemedCard from "../../../components/ThemedCard"
import ThemedLoader from "../../../components/ThemedLoader"   // correct path!

const BookDetails = () => {
    const [book, setBook] = useState(null)
    const { id } = useLocalSearchParams()
    const { fetchBookById, deleteBook } = useBooks()
    const router = useRouter()

    const handleDelete = async () => {
        await deleteBook(id)
        setBook(null)
        router.replace('/books')
    }

    useEffect(() => {
        async function loadBook() {
            const bookData = await fetchBookById(id)
            setBook(bookData)
        }
        loadBook()
        return () => setBook(null)
    }, [id])

    if (!book) {
        return (
            <ThemedView safe={true} style={styles.container}>
                <ThemedLoader />
            </ThemedView>
        )
    }

    return (
        <ThemedView safe={true} style={styles.container}>
            <ThemedCard style={styles.card}>
                <ThemedText style={styles.title}>{book.title}</ThemedText>
                <ThemedText>Written by {book.author}</ThemedText>
                <Spacer height={25} />
                <ThemedText title={true}>Book description:</ThemedText>
                <Spacer height={10} />
                <ThemedText>{book.description}</ThemedText>
            </ThemedCard>
            <ThemedButton
                label="Delete Book"
                type="primary"
                onPress={handleDelete}
                style={styles.delete}
            />
        </ThemedView>
    )
}

export default BookDetails

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center" },
    title: { fontSize: 22, fontWeight: "bold", marginVertical: 10 },
    card: { margin: 20 },
    delete: { marginTop: 30, backgroundColor: Colors.warning, width: 200, alignSelf: "center" },
})