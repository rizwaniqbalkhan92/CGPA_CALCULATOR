import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from '../styles/socialLoginStyle'
import CirclesDesign from '../../constants/CirclesDesign'
import Google from '../../assets/Images/Google.png'
import FB from '../../assets/Images/Facebook.png'
import Gmail from '../../assets/Images/Gmail.png'
import Twitter from '../../assets/Images/Twitter.png'
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin'
// import { GoogleSignin } from '@react-native-google-signin/google-signin';

import { LoginManager, AccessToken } from 'react-native-fbsdk-next';

const SocialLogin = ({navigation}) => {
  const [data,setData]=useState({})
useEffect(()=>{
  GoogleSignin.configure({});
},[])
async function onGoogleButtonPress() {
  // Check if your device supports Google Play
 await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
  // Get the users ID token
  const  idToken  = await GoogleSignin.signIn();
console.log('token',idToken)
  // Create a Google credential with the token
  // const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  // return auth().signInWithCredential(googleCredential);
}

async function onFacebookButtonPress() {
  // Attempt login with permissions
  const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

  if (result.isCancelled) {
    throw 'User cancelled the login process';
  }

  // Once signed in, get the users AccesToken
  const data = await AccessToken.getCurrentAccessToken();

  if (!data) {
    throw 'Something went wrong obtaining access token';
  }

  // Create a Firebase credential with the AccessToken
  const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(facebookCredential);
}

 const signIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    console.log('userinfor',userInfo)
    setData({ userInfo });
  } catch (error) {
    console.log('error',error)
    // if (error.code === statusCodes.SIGN_IN_CANCELLED) {
    //   console.log('errror',error)
    //   // user cancelled the login flow
    // } else if (error.code === statusCodes.IN_PROGRESS) {
    //   console.log('errror',error)

    //   // operation (e.g. sign in) is in progress already
    // } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
    //   console.log('errror',error)
    //   // play services not available or outdated
    // }
    //  else {
    //   console.log('errror',error)
    //   // some other error happened
    // }
  }
};
  return (
    <View style={styles.container}>
      <CirclesDesign />
<View style={styles.socialCircle}>
<TouchableOpacity style={styles.google}  onPress={()=>{
  signIn()
//   .then((success)=>{
//   console.log('success----',success)
// })
}}>
<Image source={Google} resizeMode='contain' style={styles.imageSocial}   />
</TouchableOpacity>
<TouchableOpacity style={styles.facebook} onPress={onFacebookButtonPress}>
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