import { View, Text } from 'react-native'
import React from 'react'

//Navigator
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

//Screens
import InAppHome from '../screens/InAppHome'
import InAppCategories from '../screens/InAppCategories'
import UserProfile from '../screens/UserProfile'

//Screen names

const inAppHome = 'Home';
const inAppCategories = 'Categories';
const userProfile = 'Profile';

const Tab = createBottomTabNavigator();

const InAppMainScreen = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator
        initialRouteName={inAppHome}
        screenOptions={({ route }: any) => ({
            tabBarIcon: ({ focused, color, size }: any) => {
              let iconName;
                let rn = route.name;
  
              if (rn === inAppHome) {
                iconName = focused ? 'home' : 'home-outline';
              } else if (rn === inAppCategories) {
                iconName = focused ? 'list' : 'list-outline';
              } else if (rn === userProfile) {
                iconName = focused ? 'person' : 'person-outline';
              }
              
              if (route.name === inAppHome)
        })}
        >

        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default InAppMainScreen