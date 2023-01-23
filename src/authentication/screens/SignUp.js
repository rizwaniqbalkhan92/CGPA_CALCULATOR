import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from '../styles/signUpStyle'
import Input from '../../constants/Input'
import Links from '../../constants/Links'
import Button from '../../constants/Button'
import auth from '@react-native-firebase/auth';
// import { initializeApp } from 'firebase/app';
import firebaseConfig from '../../../firebase.json'



const SignUp = ({navigation}) => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')

// useEffect(()=>{
//     initializeApp(firebaseConfig)
// },[])
    // console.log({
//    email,
//    password,
//    confirmPassword 
// })

const CreateAcc=()=>{
    auth()
      .createUserWithEmailAndPassword(email,password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }
    
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        console.error(error);
        navigation.navigate("Login")
      });




}


    return (
        <View style={styles.container}>
            <Text style={styles.createAccount}>Create Account</Text>
            <View style={styles.inputsContainer}>
                <Input setInputValue={setEmail} placeholder={'Email'} />
                <Input setInputValue={setPassword} placeholder={'Password'} />
                <Input setInputValue={setConfirmPassword} placeholder={'Confirm Password'} />
            </View>
            <View style={styles.btnAndLinks}>
            <Links navigation={navigation}  btnOneText={'already account ? Sign In'} btnTwoText={'Forget Password'} />
            <Button navigation={navigation} cfunc={CreateAcc}   style={styles.btn} text={'Create Account'} />
            </View>
        </View>
    )
}

export default SignUp