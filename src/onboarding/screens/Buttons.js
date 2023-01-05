import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../styles/btnStyle';

const Buttons = () => {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.btnSkip}>
            <Text style={styles.btnText}>skip</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnNext}>
            <Text style={styles.btnText}>Next</Text>
        </TouchableOpacity>

    </View>
  )
}

export default Buttons