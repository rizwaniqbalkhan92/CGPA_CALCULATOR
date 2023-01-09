import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { styles } from '../constants/styles/addBtnStyle'
import Add from '../assets/Images/Add.png'

const AddBtn = ({open,setOpen}) => {

    return (
        <TouchableOpacity style={styles.btnAdd} onPress={()=>setOpen(!open)}>
            <Image source={Add} style={styles.addBtnImg} resizeMode='contain' />
        </TouchableOpacity>
    )
}

export default AddBtn