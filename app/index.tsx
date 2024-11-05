import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Text, View, ScrollView, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';
import "../global.css";
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants'

export default function App() {
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className='w-full justify-center items-center h-full px-4'>
          <Image
            source={images.logo}
            className='w-[130pz] h-[84px]'
            resizeMode='contain'
          />
          <Image 
            source={images.cards}
            className='max-w-[280px] w-full h-[200px]'
            resizeMode='contain'
          />
          <View className='relative mt-5'>
            <Text className='text-2xl text-white font-bold text-center'>
              Discover endless possibilities with 
            </Text>
            <Text className='text-secondary-200'>
              oneInfo
            </Text>
            <Link href="./tabs/home">Home</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

