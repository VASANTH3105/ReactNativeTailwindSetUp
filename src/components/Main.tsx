import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import imageList from '../../assets/imagePack.js';

const Main = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image style={styles.rdimage} source={imageList.rdimage} />
        <Text style={styles.title}>Create Account</Text>
        <TouchableOpacity 
          onPress={() => { navigation.navigate('Home') }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  content: {
    alignItems: 'center', 
    justifyContent: 'center', 
  },
  rdimage: {
    width: 300,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '300', 
    color: '#333', 
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff', 
    width: 240,
    padding: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'normal',
    textAlign: 'center',
  },
});

export default Main;
