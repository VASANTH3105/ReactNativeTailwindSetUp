import {View, Text, Alert, TextInput, Pressable, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {MMKV} from 'react-native-mmkv';
import "./global.css"


const storage = new MMKV(); // Create a new instance of MMKV

const App = () => {
  const [userName, setUserName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [retrieveUserName, setRetrieveUserName] = useState('');
  const [retrieveMobileNumber, setRetrieveMobileNumber] = useState('');

  const saveToStorage = () => {
    storage.set('userName', userName);
    storage.set('mobileNumber', mobileNumber);
    console.log('Data saved to storage');
    setUserName('');
    setMobileNumber('');
    Alert.alert(
      `Hi ${userName} Your mobile number is ${mobileNumber} has been saved successfully`,
    );
  };

  const retrieveFromStorage = () => {
    const storedUserName = storage.getString("userName") || "No data found";
    const storedMobileNumber = storage.getString("mobileNumber") || "No mobile number found";
    
    if(storedUserName == userName) {
      setRetrieveUserName(storedUserName);
      setRetrieveMobileNumber(storedMobileNumber);
      Alert.alert("Data retrieved from storage");
      return;
    } else {
      Alert.alert("No data found in storage");
      setUserName('');
      setMobileNumber('');
    }
  }

  return (
    <View>
      <Text className='font-bold '>App</Text>
      <TextInput
      className="w-80 p-4 border border-gray-300 rounded-lg bg-white text-black mb-4"
      placeholder='UserName'
      value={userName}
      onChangeText={(name) => setUserName(name)}
      />

      <TextInput 
      placeholder='Mobile Number'
      value={mobileNumber}
      // secureTextEntry for passwords
      onChangeText={(number) => setMobileNumber(number)}
      />

      <Pressable onPress={saveToStorage}>
        <Text>Save Number</Text>
      </Pressable>

      <Pressable onPress={retrieveFromStorage}>
        <Text>Get Mobile number</Text>
      </Pressable>

      {(retrieveUserName && retrieveMobileNumber) && (
        <Text>
          {retrieveUserName}: {retrieveMobileNumber}
        </Text>
      )}



    </View>
  );
};




export default App;
