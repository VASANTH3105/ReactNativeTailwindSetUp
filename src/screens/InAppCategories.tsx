import { View, Text, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import NetInfo from '@react-native-community/netinfo';

const InAppCategories = () => {
  const [isConnected, setIsConnected] = useState(false);

  // Monitor network connectivity
  useEffect(() => {
    const unSubscribe = NetInfo.addEventListener((state) => {
      if (state.isConnected !== null) {
        setIsConnected(state.isConnected);
        console.log('Network status:', state.isConnected);
      } else {
        setIsConnected(false);
      }
    });

    // Cleanup subscription on component unmount
    return () => {
      unSubscribe();
    };
  }, []);

  // Show alert if the user is offline
  useEffect(() => {
    if (!isConnected) {
      Alert.alert("Check your Internet Connection!", `Online status: ${isConnected}`);
    }
  }, [isConnected]); // Add `isConnected` as a dependency

  return (
    <View>
      {isConnected ? <Text>You are online</Text> : <Text>You are offline</Text>}
    </View>
  );
};

export default InAppCategories;
