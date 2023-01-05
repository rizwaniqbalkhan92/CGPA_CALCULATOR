import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../../styles/textStyleHome'

const TextContainer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>3.2</Text>
      <Text style={styles.string}>CGPA</Text>
    </View>
  )
}

export default TextContainer