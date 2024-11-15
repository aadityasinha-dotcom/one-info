import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Text, View, ScrollView, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Link, router } from 'expo-router';
import "../global.css";
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants'
import CustomButton from '@/components/CustomButton';

export default function App() {
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className='w-full justify-center items-center min-h-[85vh] px-4'>
          <Image
            source={images.logo}
            className='w-[130px] h-[84px]'
            resizeMode='contain'
          />
          <Image 
            source={images.cards}
            className='max-w-[280px] w-full h-[200px]'
            resizeMode='contain'
          />
          <View className='relative mt-5'>
            <Text className='text-2xl text-white font-bold text-center'>
              Discover endless possibilities with {' '}
            </Text>
            <Text className='text-4xl text-secondary-200 font-bold text-center'>
              oneInfo
            </Text>
            <Image 
              source={images.path}
              className='w-[136px] h-[15px] absolute bottom-7 right-4'
              resizeMode='contain'
            />
            <Link href="./tabs/home">Home</Link>
          </View>
          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push('./auth/sign-in')}
            containerStyle='w-full mt-7'
          />
        </View>
        {/* <StatusBar backgroundColor='#161622' style='light' /> */}
      </ScrollView>
    </SafeAreaView>
  )
}

