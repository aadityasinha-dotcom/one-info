import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>OneInfo</Text>
      <StatusBar style="auto" />
      <Link href="/profile" style={{ color: 'blue' }}>Go to profile</Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
