import { useColorScheme, View } from 'react-native'
import { Colors } from '../constants/Colors'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const ThemedView = ({ style, safe = false, variant = 'default', ...props }) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

    const backgrounds = {
        default: theme.background,
        surface: theme.surface,
        card: theme.uiBackground,
        nav: theme.navBackground,
        transparent: 'transparent',
    }

    const baseStyle = { backgroundColor: backgrounds[variant] ?? theme.background }

    if (!safe) return <View style={[baseStyle, style]} {...props} />

    const insets = useSafeAreaInsets()

    return (
        <View style={[{
            ...baseStyle,
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
        }, style]} {...props} />
    )
}

export default ThemedView