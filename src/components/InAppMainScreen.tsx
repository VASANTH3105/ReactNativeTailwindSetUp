import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Screens
import InAppCategories from '../screens/InAppCategories';
import InAppHome from '../screens/InAppHome';
import UserProfile from '../screens/UserProfile';
import {StyleSheet} from 'react-native';

const Tab = createBottomTabNavigator();

const InAppMainScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.bottomNav,
        tabBarActiveTintColor: '#007bff', // Color for the active tab
        tabBarInactiveTintColor: 'gray', // Color for the inactive tabs
        tabBarLabelStyle: styles.labelStyle, // Style for the tab labels
        tabBarIconStyle: styles.iconStyle, // Optional, to style icons if needed
        headerShown: true, // Hides the header (optional)
        tabBarPosition: 'bottom', // Ensures tabs are at the bottom (default behavior)
      }}>
      <Tab.Screen name="Home" component={InAppHome} />
      <Tab.Screen name="Categories" component={InAppCategories} />
      <Tab.Screen name="Profile" component={UserProfile} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  bottomNav: {
    height: 60, // Adjust height of the tab bar
    backgroundColor: 'white', // Background color of the tab bar
    borderTopWidth: 1, // Border at the top of the tab bar
    borderTopColor: 'lightgray', // Color of the border
    position: 'absolute', // Keeps it at the bottom of the screen
    left: 0,
    right: 0,
    elevation: 5, // Add shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: {width: 0, height: -2},
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  labelStyle: {
    fontSize: 12, // Adjust font size of labels
    fontWeight: "medium", // Make labels bold
  },
  iconStyle: {
    width: 25, // Optional: Set icon size
    height: 25,
  },
});

export default InAppMainScreen;
