// Themed Logo Component

import { Image, useColorScheme } from 'react-native'

// images
import DarkLogo from '../assets/img/logo_dark.png'
import LightLogo from '../assets/img/logo_light.png'

const ThemedLogo = ({ size = 280 }) => {

    const colorScheme = useColorScheme()
    const logo = colorScheme === 'dark' ? DarkLogo : LightLogo

    return (
        <Image
            source={logo}
            style={{ width: size, height: size, resizeMode: 'contain' }}
        />
    )
}
export default ThemedLogo