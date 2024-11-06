import { SplashScreen, Tabs, Stack } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

SplashScreen.preventAutoHideAsync();

const AuthLayout = () => {

  return (
    <>
      <Stack>
        <Stack.Screen name='sign-in' options={{ headerShown: false }} />
        <Stack.Screen name='sign-up' options={{ headerShown: false }} />
      </Stack>
    </>
  )
}

export default AuthLayout

