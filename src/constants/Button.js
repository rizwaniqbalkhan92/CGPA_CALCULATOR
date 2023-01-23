import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './styles/btnStyle'

import { useRoute } from '@react-navigation/native';
const Button = ({ navigation, text, cfunc }) => {
  const route = useRoute();
  console.log(route.name);

  function nextScreen() {
    // cfunc
    route.name === "GetStarted" ?
      navigation.navigate('SocialLogin')
      : route.name === "Login" ?
        navigation.navigate('SignUp') :
        route.name === "SignUp" ?
          navigation.navigate('Login') : null


  }
function run (){
  cfunc
  // nextScreen()
}
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={cfunc}   >
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  )
}

export default Button

