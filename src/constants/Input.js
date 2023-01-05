import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { styles } from './styles/inputStyle'

const Input = ({placeholder}) => {
  return (
  <TextInput  placeholder={placeholder} placeholderTextColor={'black'}  style={styles.inputContainer}  />
  )
}

export default Input