import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { styles } from '../constants/styles/addBtnStyle'
import Add from '../assets/Images/Add.png'
const AddBtn = () => {
    return (
        <TouchableOpacity style={styles.btnAdd}>
            <Image source={Add} style={styles.addBtnImg} resizeMode='contain' />
        </TouchableOpacity>
    )
}

export default AddBtn