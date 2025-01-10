import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const UserProfile = ({navigation}: any) => {
  return (
    <View>
      <Text>UserProfilePage</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Main')}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default UserProfile