import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles/linksStyle'
import { useRoute } from '@react-navigation/native';

const Links = ({navigation, btnOneText,btnTwoText}) => {
  const route = useRoute();
  console.log(route.name);
// console.log('navigation',navigation)
function goToNextScreen(){
  route.name ==="Login" ? 
  navigation.navigate('SignUp'):navigation.navigate('Login')
  navigation.navigate("")
}
  return (
    <View style={styles.linksContainer}>
    <TouchableOpacity style={styles.btnLink} onPress={()=>{
      goToNextScreen()
    }}>
        <Text style={styles.btnText}>{btnOneText}</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.btnLink} onPress={()=>{}}>
        <Text style={styles.btnText}>{btnTwoText}</Text>
    </TouchableOpacity>
    </View>
  )
}

export default Links