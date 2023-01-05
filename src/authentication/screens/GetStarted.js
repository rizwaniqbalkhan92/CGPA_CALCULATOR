import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from '../styles/getStartedStyle'
import Button from '../../constants/Button'

const GetStarted = () => {
  return (
    <View style={styles.container}>
         <View style={styles.innerContainer}> 
         <View>
        <Text style={styles.checkText} >چیک</Text>
        <Text style={styles.cgpaText} >اعمال نامہ</Text>

         </View>
        <Button   text={'Get Started'}  />
        </View>
    </View>
  )
}

export default GetStarted

