import { SplashScreen, Tabs } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';
import FormField from '@/components/FormField';

const SignIn = () => {

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  return (
    <SafeAreaView className='bg-primary h-full'>
      <View className='w-full justify-center min-h-[5vh] px-4 my-6'>
        <Image
          source={images.logo}
          resizeMode='contain'
          className='w-[115px] h-[35px]'
        />
        <Text className='text-2xl text-white 
          text-semibol mt-10 font-psemibold'>
          Log in to oneInfo
        </Text>
        <FormField 
          title='Email'
          value={form.email}
          handleChangeText={(e) => setForm({ ...form, email: e})}
          otherStyles="mt-7"
          keyboardType="email-address"
        />
        <FormField 
          title='Password'
          value={form.password}
          handleChangeText={(e) => setForm({ ...form, password: e})}
          otherStyles="mt-7"
          keyboardType="password"
        />
      </View>
    </SafeAreaView>
  )
}

export default SignIn

