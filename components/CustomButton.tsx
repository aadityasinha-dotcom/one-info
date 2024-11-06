import { SplashScreen, Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const CustomButton = (
  { 
    title, 
    handlePress, 
    containerStyles, 
    textStyles, 
    isLoading 
  }: props) => {

  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      style={styles.button}
      disabled={isLoading}
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FF9C01', // replace with your actual color code
    padding: 10,
    borderRadius: 50,
  },
});

export default CustomButton

