import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './styles/btnStyle'

import { useRoute } from '@react-navigation/native';
const Button = ({ navigation, text }) => {
  const route = useRoute();
  console.log(route.name);

  function nextScreen() {
    route.name  === "GetStarted" ?
    navigation.navigate('SocialLogin') 
    : route.name==="Login" ?
    navigation.navigate('SignUp') :
    route.name==="SignUp" ? 
    navigation.navigate('Login') :null
    

  }

  return (
    <TouchableOpacity style={styles.btnContainer} onPress={nextScreen}>
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  )
}

export default Button

