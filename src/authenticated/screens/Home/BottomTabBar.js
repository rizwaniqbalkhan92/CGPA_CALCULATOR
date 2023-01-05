import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { styles } from '../../styles/bottomTabBar'
import Home from '../../../assets/Images/Vector.png'
import Cal from '../../../assets/Images/Gpa.png'
import User from '../../../assets/Images/User.png'
import Exam from '../../../assets/Images/Exam.png'

const BottomTabBar = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btnTabBar} onPress={() => alert('hello')}>
                <Image source={Home} resizeMode='contain' style={styles.img} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnTabBar}>
                <Image source={Cal} resizeMode='contain' style={styles.img} />

            </TouchableOpacity>
            <TouchableOpacity style={styles.btnTabBar}>
                <Image source={Exam} resizeMode='contain' style={styles.img} />

            </TouchableOpacity>
            <TouchableOpacity style={styles.btnTabBar}>
                <Image source={User} resizeMode='contain' style={styles.img} />

            </TouchableOpacity>

        </View>
    )
}

export default BottomTabBar