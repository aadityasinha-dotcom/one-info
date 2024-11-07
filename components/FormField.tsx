import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';

import { icons } from '../constants';

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
          style={{ width: title === 'Password' ? '80%' : '100%' }}
          secureTextEntry={title === 'Password' && !showPassword}
        />

        {title === 'Password' && (
          <TouchableOpacity 
            onPress={() => setShowPassword(!showPassword)}
          >
            <Image source={!showPassword ? icons.eye : icons.eyeHide}
              className='w-6 h-6'
              style={{ height: '60%', marginTop: 12 }}
              resizeMode='contain'
            />
          </TouchableOpacity>
        )}
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
    flexDirection: 'row',
    borderRadius: 18,
    marginTop: 10,
    paddingHorizontal: 16,
    backgroundColor: '#1A1A1A',
    justifyContent: 'center',
  },
})

export default FormField

