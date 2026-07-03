// register page
import { Keyboard, StyleSheet, Pressable } from 'react-native'
import { Link } from 'expo-router'
import { Colors } from '../../constants/Colors'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput'
import { useState } from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import { useUser } from '../../hooks/useUser'

const Register = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null)

    const { register } = useUser()

    const handleSubmit = async () => {
        try { await register(email, password) }
        catch (err) {
            setError(err.message)
        }
    }

    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>

            <ThemedView style={styles.container}>

                <ThemedView variant="transparent">

                    <ThemedText title style={styles.title}>
                        Create Account
                    </ThemedText>

                    <ThemedText style={styles.subtitle}>
                        Start building your shelf
                    </ThemedText>

                    <Spacer height={32} />

                    <ThemedTextInput
                        placeholder="Email"
                        keyboardType="email-address"
                        onChangeText={setEmail}
                        value={email}
                    />

                    <Spacer height={16} />

                    <ThemedTextInput
                        placeholder="Password"
                        secureTextEntry
                        onChangeText={setPassword}
                        value={password}
                    />

                    <Spacer height={24} />

                    {error && (
                        <ThemedView variant="transparent" style={styles.errorBox}>
                            <ThemedText style={styles.errorText}>
                                {error}
                            </ThemedText>
                        </ThemedView>
                    )}

                    <ThemedButton
                        label="Register"
                        type="primary"
                        onPress={handleSubmit}
                    />

                    <Spacer height={24} />

                    {/* Login Link */}
                    <Link href="/(auth)/login" asChild>
                        <Pressable style={styles.footerLink}>
                            <ThemedText style={styles.footerText}>
                                Already have an account? Login
                            </ThemedText>
                        </Pressable>
                    </Link>

                </ThemedView>

            </ThemedView>

        </TouchableWithoutFeedback>
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 32,
    },
    title: {
        textAlign: "center",
        fontSize: 28,
        marginBottom: 8,
    },
    subtitle: {
        textAlign: "center",
        fontSize: 15,
        opacity: 0.6,
        marginBottom: 10,
    },
    errorBox: {
        width: '100%',
        backgroundColor: Colors.warning,
        borderColor: Colors.warning,
        borderWidth: 1,
        borderRadius: 12,
        padding: 14,
        marginBottom: 16,
    },
    errorText: {
        color: "#252019",
        fontSize: 13,
        textAlign: 'center',
    },
    footerLink: {
        paddingVertical: 8,
    },
    footerText: {
        fontSize: 14,
        opacity: 0.6,
        textDecorationLine: 'underline',
        textAlign: "center",
    },
})