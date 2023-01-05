import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles/listStyle'

const Item = () => {
  return (
    <View style={styles.container}>
        <View style={styles.textContainer}>
            <Text style={styles.text}>1st Semester</Text>
            <Text style={styles.text}>3.2 CGPA</Text>
        </View>
    </View>
  )
}

export default Item