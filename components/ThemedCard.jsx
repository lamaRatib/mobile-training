// Themed Card Component
import { useColorScheme, View } from 'react-native'
import { Colors } from '../constants/Colors'

const ThemedCard = ({ style, ...props }) => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  return (
    <View
      style={[
        {
          backgroundColor: theme.cardBackground,
          borderRadius: 16,       
          borderWidth: 1,
          borderColor: theme.borderColor,
          shadowColor: theme.shadowColor,
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.15,
          shadowRadius: 8,
          elevation: 4,
          padding: 24,            
        },
        style
      ]}
      {...props}
    />
  )
}

export default ThemedCard