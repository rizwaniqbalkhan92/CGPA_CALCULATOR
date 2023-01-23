import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles/inputStyle'

const Input = ({placeholder,setInputValue}) => {

  
  return (
  <TextInput  onChangeText={e=>setInputValue(e)} placeholder={placeholder} placeholderTextColor={'black'}  style={styles.inputContainer}  />
  )
}

export default Input