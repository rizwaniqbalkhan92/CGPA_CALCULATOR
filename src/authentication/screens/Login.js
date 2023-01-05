import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../styles/loginStyle'
import Input from '../../constants/Input'
import Links from '../../constants/Links'
import Button from '../../constants/Button'

const Login = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.createAccount}>Login</Text>
            <View style={styles.inputsContainer}>
                <Input placeholder={'Email'} />
                <Input placeholder={'Password'} />
             
            </View>
            <View style={styles.btnAndLinks}>
            <Links btnOneText={'are you new? Sign Up'} btnTwoText={'Forget Password'} />
            <Button style={styles.btn} text={'Login'} />
            </View>
        </View>
    )
}

export default Login