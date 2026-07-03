import { Pressable, StyleSheet } from "react-native";
import { Link } from 'expo-router';
import ThemedView from "../components/ThemedView";
import ThemedText from "../components/ThemedText";
import ThemedLogo from "../components/ThemedLogo";
import ThemedButton from "../components/ThemedButton";
import Spacer from "../components/Spacer";
import { Colors } from '../constants/Colors';
import { useColorScheme } from 'react-native';

export default function Index() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <ThemedView style={styles.container}>

      <ThemedView variant="transparent" style={styles.topSection}>
        <ThemedLogo />
        <Spacer height={20} />
        <ThemedText style={styles.subtitle}>
          Your personal bookshelf
        </ThemedText>
      </ThemedView>

      <Spacer height={50} />

      <ThemedView variant="transparent" style={styles.buttonsSection}>
        <Link href="/login" asChild>
          <ThemedButton label="Login" type="primary" />
        </Link>

        <Spacer height={12} />

        <Link href="/register" asChild>
          <ThemedButton label="Create Account" type="secondary" />
        </Link>

      </ThemedView>

    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
  },
  topSection: {
    alignItems: 'center',
    marginTop: 60,
  },
  subtitle: {
    fontSize: 15,
    opacity: 0.7,
  },
  buttonsSection: {
    width: '100%',
    alignItems: 'center',
  },
});