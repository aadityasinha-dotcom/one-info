import { Link, SplashScreen, Tabs } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';

const SignIn = () => {

  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {

  }

  return (
    <SafeAreaView className='bg-primary h-full'>
      <View className='w-full justify-center items-center min-h-[85vh] px-4 my-6'>
        <Text className='text-2xl text-white 
          text-semibol mt-10 font-psemibold'>
          Log in to oneInfo
        </Text>
        <FormField 
          title='Email'
          value={form.email}
          placeholder=''
          handleChangeText={(e) => setForm({ ...form, email: e})}
          otherStyles="mt-7"
          keyboardType="email-address"
        />
        <FormField 
          title='Password'
          value={form.password}
          placeholder=''
          handleChangeText={(e) => setForm({ ...form, password: e})}
          otherStyles="mt-7 mb-7"
          keyboardType="password"
        />
        <CustomButton 
          title="Sign In"
          handlePress={submit}
          containerStyle="mt-7"
          isLoading={isSubmitting}
        />

        <View className='justify-center pt-5 flex-row gap-2'>
          <Text className='text-xs text-gray-100 font-pregular'>
            Don't have an account?
          </Text>
          <Link href="/auth/sign-up"
            className='text-lg text-secondary font-psemibold'
          >Sign Up</Link>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default SignIn

