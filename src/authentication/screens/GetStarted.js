import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from '../styles/getStartedStyle'
import Button from '../../constants/Button'
// import { useRoute } from '@react-navigation/native';

const GetStarted = ({navigation}) => {
  // const route = useRoute();
  // console.log(route.name);

  return (
    <View style={styles.container}>
         <View style={styles.innerContainer}> 
         <View>
        <Text style={styles.checkText} >چیک</Text>
        <Text style={styles.cgpaText} >اعمال نامہ</Text>

         </View>
        <Button navigation={navigation}  text={'Get Started'}  />
        </View>
    </View>
  )
}

export default GetStarted

