import { View, Text, Image, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import "./global.css";
import MobileNumberStorage from './src/components/MobileNumberStorage';
import imageList from './assets/imagePack.js';
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
      {/* <MobileNumberStorage /> */}
      <Image 
      
      className='w-80 h-80 mx-auto mt-8'
      source={imageList.loginPic}
      />
      <Text className='text-4xl font-bold text-black-500 text-center'>Create Account</Text>
      <TouchableOpacity className='bg-teal-600 w-60 mx-auto m-8 p-3 rounded-lg'>
        <Text className='text-2xl font-normal text-white text-center'>
          Sign Up
          </Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff'
  }
})

export default App