import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from '../../styles/profileStyle'
import CirclesDesign from '../../../constants/CirclesDesign'
// import * as ImagePicker from 'react-native-image-picker';

const Profile = () => {
  return (
    <View style={styles.profileContainer}>
      <CirclesDesign/>
{/* <ImagePicker/> */}
    </View>
  )
}

export default Profile

