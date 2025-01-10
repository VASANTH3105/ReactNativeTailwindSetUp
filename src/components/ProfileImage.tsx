import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const ProfileImage = () => {
  return (
    <TouchableOpacity>
        <Image 
        source={{ uri: 'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg'}}
        style={{ width: 50, height: 50, borderRadius: 100, marginRight: 10 }}
        />
    </TouchableOpacity>
  )
}

export default ProfileImage