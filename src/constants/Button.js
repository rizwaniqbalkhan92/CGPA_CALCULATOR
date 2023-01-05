import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './styles/btnStyle'
const Button = ({text}) => {
  return (
   <TouchableOpacity style={styles.btnContainer}>
    <Text style={styles.btnText}>{text}</Text>
   </TouchableOpacity>
  )
}

export default Button

