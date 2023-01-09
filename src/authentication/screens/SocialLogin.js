import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useEffect } from 'react'
import { styles } from '../styles/socialLoginStyle'
import CirclesDesign from '../../constants/CirclesDesign'
import Google from '../../assets/Images/Google.png'
import FB from '../../assets/Images/Facebook.png'
import Gmail from '../../assets/Images/Gmail.png'
import Twitter from '../../assets/Images/Twitter.png'
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin'
// import { GoogleSignin } from '@react-native-google-signin/google-signin';

const SocialLogin = ({navigation}) => {
// useEffect(()=>{
//   GoogleSignin.configure({});
// },[])
async function onGoogleButtonPress() {
  // Check if your device supports Google Play
  await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
  // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}
  return (
    <View style={styles.container}>
      <CirclesDesign />
<View style={styles.socialCircle}>
<TouchableOpacity style={styles.google}  onPress={()=>{onGoogleButtonPress().then((success)=>{
  console.log('success----',success)
})}}>
<Image source={Google} resizeMode='contain' style={styles.imageSocial}   />
</TouchableOpacity>
<TouchableOpacity style={styles.facebook}>
<Image source={FB} resizeMode='contain' style={styles.imageSocial}  />
</TouchableOpacity>
<TouchableOpacity style={styles.twitter}>
<Image source={Twitter}  resizeMode='contain' style={styles.imageSocial} />
</TouchableOpacity>
<TouchableOpacity style={styles.email}  onPress={()=>navigation.navigate('Login')} >
<Image source={Gmail}  resizeMode='contain' style={styles.imageSocial} />
</TouchableOpacity>
</View>

    </View>
  )
}

export default SocialLogin