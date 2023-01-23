import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../styles/loginStyle'
import Input from '../../constants/Input'
import Links from '../../constants/Links'
import Button from '../../constants/Button'
import auth from '@react-native-firebase/auth';
import { useState } from 'react'
const Login = ({navigation}) => {
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')

    const SignIn=()=>{
   console.log('signin......')

auth()
  .signInWithEmailAndPassword(email,password)
  .then(() => {
    console.log('signed in!');
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.createAccount}>Login</Text>
            <View style={styles.inputsContainer}>
                <Input setInputValue={setEmail}  placeholder={'Email'} />
                <Input  setInputValue={setPassword} placeholder={'Password'} />
             
            </View>
            <View style={styles.btnAndLinks}>
            <Links navigation={navigation} btnOneText={'are you new? Sign Up'} btnTwoText={'Forget Password'} />
            <Button navigation={navigation} cfunc={SignIn}  style={styles.btn} text={'Login'} />
            </View>
        </View>
    )
}

export default Login