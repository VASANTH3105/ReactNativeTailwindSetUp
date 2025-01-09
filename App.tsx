import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import React from 'react';
import './global.css';
import MobileNumberStorage from './src/components/MobileNumberStorage';
import imageList from './assets/imagePack.js';
import {
  createStaticNavigation,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from './src/components/Main.tsx';
import Home from './src/components/Home.tsx';
import LoginScreen from './src/components/LoginScreen.tsx';
import InAppMainScreen from './src/components/InAppMainScreen.tsx';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          component={Main}
          name="Main"
        />
        <Stack.Screen component={Home} name="Home" />
        <Stack.Screen component={LoginScreen} name="LoginScreen" />
        <Stack.Screen component={InAppMainScreen} name="InAppMainScreen" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
});

export default App;
