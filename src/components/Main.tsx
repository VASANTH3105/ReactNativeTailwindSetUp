import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import imageList from '../../assets/imagePack.js';

const Main = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.container}>
          <View>
            {/* <MobileNumberStorage /> */}
            <Image style={styles.rdimage} source={imageList.rdimage} />
            <Text className="text-2xl font-light text-black-500 text-center">
              Create Account
            </Text>
            <TouchableOpacity 
            onPress={() => { navigation.navigate('Home')}}
            className="bg-teal-600 w-60 mx-auto m-8 p-3 rounded-lg"
            >
              <Text className="text-2xl font-normal text-white text-center">
                Get Started
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
    backgroundColor: '#ffffff',
  },
  rdimage: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 10,
  }
});

export default Main