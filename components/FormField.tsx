import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image } from 'react-native';

interface props {
  title: string;
  value: string;
  placeholder: any;
  handleChangeText: any;
  otherStyles: any;
  keyboardType: string;
}

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  keyboardType,
}: props) => {

  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className='text-base text-white
      font-pmedium'>{title}</Text>
      <View style={[
        styles.emailContainer,
        { borderColor: isFocused ? 'orange' : 'black' },
      ]}>
        <TextInput
          value={value}
          onChangeText={handleChangeText}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className='flex-1 text-white font-psemibold'
          secureTextEntry={title === 'Password' && !showPassword}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  emailContainer: {
    borderWidth: 2,
    borderColor: 'black',
    width: '100%',
    height: 64,
    borderRadius: 18,
    marginTop: 10,
    paddingHorizontal: 16,
    backgroundColor: '#1A1A1A',
    justifyContent: 'center',
  },
})

export default FormField

