import { Pressable, StyleSheet } from 'react-native'
import { Colors } from '../constants/Colors'
import { useColorScheme } from 'react-native'
import ThemedText from './ThemedText'

function ThemedButton({ label, type = 'primary', style, ...props }) {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

    const isPrimary = type === 'primary'

    return (
        <Pressable
            style={({ pressed }) => [
                styles.button,
                {
                    backgroundColor: isPrimary ? Colors.primary : 'transparent',
                    borderWidth: isPrimary ? 0 : 1.5,
                    borderColor: Colors.primary,
                    shadowColor: isPrimary ? theme.shadowColor : 'transparent',
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: isPrimary ? 0.2 : 0,
                    shadowRadius: isPrimary ? 8 : 0,
                    elevation: isPrimary ? 4 : 0,
                },
                pressed && styles.pressed,
                style
            ]}
            {...props}
        >
            <ThemedText style={[styles.text, { color: isPrimary ? '#FAF5EE' : Colors.primary }]}>
                {label}
            </ThemedText>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    text: {
        fontSize: 15,
        fontWeight: '600',
        letterSpacing: 0.5,
    },
    pressed: {
        opacity: 0.7,
        transform: [{ scale: 0.98 }],
    },
})

export default ThemedButton