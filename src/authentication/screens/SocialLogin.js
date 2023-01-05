import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { styles } from '../styles/socialLoginStyle'
import CirclesDesign from '../../constants/CirclesDesign'
import Google from '../../assets/Images/Google.png'
import FB from '../../assets/Images/Facebook.png'
import Gmail from '../../assets/Images/Gmail.png'
import Twitter from '../../assets/Images/Twitter.png'

const SocialLogin = () => {
  return (
    <View style={styles.container}>
      <CirclesDesign />
<View style={styles.socialCircle}>
<TouchableOpacity style={styles.google}>
<Image source={Google} resizeMode='contain' style={styles.imageSocial}   />
</TouchableOpacity>
<TouchableOpacity style={styles.facebook}>
<Image source={FB} resizeMode='contain' style={styles.imageSocial}  />
</TouchableOpacity>
<TouchableOpacity style={styles.twitter}>
<Image source={Twitter}  resizeMode='contain' style={styles.imageSocial} />
</TouchableOpacity>
<TouchableOpacity style={styles.email}>
<Image source={Gmail}  resizeMode='contain' style={styles.imageSocial} />
</TouchableOpacity>
</View>

    </View>
  )
}

export default SocialLogin