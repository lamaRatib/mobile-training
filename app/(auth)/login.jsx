// login page
import { Keyboard, StyleSheet, Pressable } from 'react-native'
import { Link } from 'expo-router'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput'
import Spacer from '../../components/Spacer'
import { Colors } from '../../constants/Colors'
import { useState } from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import { useUser } from '../../hooks/useUser'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null)

    const { login } = useUser()

    const handleSubmit = async () => {
        try { await login(email, password) }
        catch (err) {
            setError(err.message)
        }
    }

    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
            
            <ThemedView style={styles.container}>

                <ThemedView variant="transparent">
                    
                    <ThemedText title style={styles.title}>
                        Welcome Back
                    </ThemedText>

                    <ThemedText style={styles.subtitle}>
                        Login to your personal shelf
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
                        label="Login" 
                        type="primary" 
                        onPress={handleSubmit} 
                    />

                    <Spacer height={24} />

                    {/* Register Link */}
                    <Link href="/(auth)/register" asChild>
                        <Pressable style={styles.footerLink}>
                            <ThemedText style={styles.footerText}>
                                Don't have an account? Register
                            </ThemedText>
                        </Pressable>
                    </Link>

                </ThemedView>

            </ThemedView>

        </TouchableWithoutFeedback>
    )
}

export default Login

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
