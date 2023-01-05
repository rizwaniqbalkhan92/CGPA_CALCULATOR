import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles/linksStyle'

const Links = ({btnOneText,btnTwoText}) => {
  return (
    <View style={styles.linksContainer}>
    <TouchableOpacity style={styles.btnLink} onPress={()=>{}}>
        <Text style={styles.btnText}>{btnOneText}</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.btnLink} onPress={()=>{}}>
        <Text style={styles.btnText}>{btnTwoText}</Text>
    </TouchableOpacity>
    </View>
  )
}

export default Links