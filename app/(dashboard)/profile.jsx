import { StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons' // You already have this from your layout!
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import ThemedCard from '../../components/ThemedCard'
import ThemedButton from '../../components/ThemedButton'
import Spacer from '../../components/Spacer'
import { Colors } from '../../constants/Colors'
import { useUser } from '../../hooks/useUser'

const Profile = () => {
    const { logout, user } = useUser()

    return (
        <ThemedView style={styles.container}>

            <ThemedView variant="transparent" style={styles.innerContainer}>

                <ThemedView variant="card" style={styles.avatarCircle}>
                    <Ionicons name="person-outline" size={48} color={Colors.primary} />
                </ThemedView>

                <Spacer height={20} />

                <ThemedCard style={styles.infoCard}>
                    <ThemedText style={styles.emailText}>
                        {user.email}
                    </ThemedText>
                </ThemedCard>

                <Spacer height={16} />

                <ThemedText style={styles.captionText}>
                    Time to start reading some books...
                </ThemedText>

                <Spacer height={40} />

                <ThemedButton
                    label="Logout"
                    type="secondary"
                    onPress={logout}
                />

            </ThemedView>

        </ThemedView>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 32, 
    },
    innerContainer: {
        width: '100%',
        alignItems: 'center', 
    },
    avatarCircle: {
        width: 100,
        height: 100,
        borderRadius: 50, 
        alignItems: 'center',
        justifyContent: 'center',
    },
    infoCard: {
        width: '100%',
        alignItems: 'center',
    },
    emailText: {
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
    },
    captionText: {
        fontSize: 14,
        opacity: 0.6,
        textAlign: 'center',
    },
})