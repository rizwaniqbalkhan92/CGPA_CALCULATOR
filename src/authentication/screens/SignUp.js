import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../styles/signUpStyle'
import Input from '../../constants/Input'
import Links from '../../constants/Links'
import Button from '../../constants/Button'

const SignUp = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.createAccount}>Create Account</Text>
            <View style={styles.inputsContainer}>
                <Input placeholder={'Email'} />
                <Input placeholder={'Password'} />
                <Input placeholder={'Confirm Password'} />
            </View>
            <View style={styles.btnAndLinks}>
            <Links navigation={navigation} btnOneText={'already account ? Sign In'} btnTwoText={'Forget Password'} />
            <Button navigation={navigation} style={styles.btn} text={'Create Account'} />
            </View>
        </View>
    )
}

export default SignUp